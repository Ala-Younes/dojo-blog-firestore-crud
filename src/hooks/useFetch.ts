import { useEffect, useState } from "react";
import { Blog } from "../data";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // ! Cleanup function
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not fetch data => res.ok : ${res.ok}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError("");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setData([]);
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
    setData,
  };
};
