import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PostCreate from "./posts/PostCreate";
import PostDelete from "./posts/PostDelete";
import PostEdit from "./posts/PostEdit";
import PostList from "./posts/PostList";
import PostShow from "./posts/PostShow";
import Header from "./Header";
import history from "../history";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="mdl-layout mdl-js-layout">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/post/new" exact component={PostCreate} />
          <Route path="/post/edit/:id" exact component={PostEdit} />
          <Route path="/post/delete/:id" exact component={PostDelete} />
          <Route path="/post/:id" exact component={PostShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
