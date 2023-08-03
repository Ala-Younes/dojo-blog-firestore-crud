import { useState } from "react";
interface FilterByAuthorProps {
  onFilter: (author: string) => void;
}

const AuthorFilter = ({ onFilter }: FilterByAuthorProps) => {
  const [author, setAuthor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuthor(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex mx-auto max-w-md pb-8">
      <select
        value={author}
        onChange={(e) => handleChange(e)}
        className="w-full py-2 rounded-lg border border-gray-300"
      >
        <option value="all">all</option>
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
      </select>
    </div>
  );
};

export default AuthorFilter;
