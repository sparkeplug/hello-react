import React from "react";
import { Link, Route } from "react-router-dom";

function Topic(props) {
  console.log(props);

  return <h1>{props.match.params.topicId}</h1>;
}
export default function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/rendering">Rendering with React</Link>
        </li>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state">Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path="/topics/:topicId" component={Topic} />
    </div>
  );
}
