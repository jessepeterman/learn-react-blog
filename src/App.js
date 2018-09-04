import React from "react";
import "./App.css";
import blogs from "./blogs.js";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1>Learn React Blog</h1>
  </div>
);
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Topic = ({ match }) => {
  return (
    <div>
      {blogs.filter(blog => match.params.postNumber == blog.id).map(blog => (
        <div className="blog-content">
          <h3>{blog.title}</h3>
          {blog.p.map(x => (
            <p>{x}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

const isLoading = true;

// let loader = '...';

// const timer = setInterval(() => {
//   loader += '.';
// }, 500);

// setTimeout(() => {
//   clearInterval(timer);
// }, 2000);

const Topics = ({ match }) => {
  return (
    <div className="blog">
      <div className="side-nav">
        <h2>Topics</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <NavLink
                activeClassName="current-blog"
                to={`${match.url}/${blog.id}`}
                props={blog}
              >
                {blog.title}
              </NavLink>
            </li>
          ))}
          {/* {isLoading && loader} */}
        </ul>
      </div>
      {/* sets the path, component, and variable for the route param */}
      <Route path={`${match.path}/:postNumber`} component={Topic} />
    </div>
  );
};

const blogPartial = [];
let count = 0;
for (const key in blogs) {
  if (count >= 2) {
  } else {
    blogPartial.push({ key: blogs[key] });
  }
  count++;
  console.log(blogPartial);
}

const BlogScroll = () => (
  <div>
    {blogs.map(blog => (
      <div className="blog-content">
        <h3>{blog.title}</h3>
        {blog.p.map(x => (
          <p>{x}</p>
        ))}
      </div>
    ))}
  </div>
);

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Route exact path="/" render={() => (<Redirect to="/blogs"/>)} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/blogs" component={Topics} />
      {/* <Route exact path="/" component={BlogScroll} /> */}

      {/* <Route
        path="/about"
        children={({ match }) => match && <h1>About: inline function</h1>}
      /> */}
    </div>
  </Router>
);

export default App;
