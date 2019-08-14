import React from "react";
import { Link, Route } from "react-router-dom";

function Topic(props) {
  // console.log(props);

  return <h1>{props.match.params.topicId}</h1>;
}
export default function Topics({ match }) {
  console.log("props", match);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
}
