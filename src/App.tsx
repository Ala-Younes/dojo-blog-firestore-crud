import "./App.css";
import { ToastProvider } from "./Providers/toast-provider";
import BlogCreate from "./components/Blog/Create";
import BlogDetails from "./components/Blog/Details";
import NotFound from "./components/Common/NotFound";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  // ! Here goes the store provider
  return (
    <Router>
      <div className="container max-w-6xl mx-auto px-5 py-6">
        <ToastProvider />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <BlogCreate />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
