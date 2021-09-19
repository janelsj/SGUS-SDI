import { Switch, Route, Link, useHistory } from "react-router-dom";

function Home() {
  return (
    <>
      <h3>Home</h3>
      <div class="tab-selection">
        <div>
          <Link to="/home/a">A</Link>
        </div>
        <div>
          <Link to="/home/b">B</Link>
        </div>
        <div>
          <Link to="/home/c">C</Link>
        </div>
      </div>
      <div class="tab-container">
        <Switch>
          <Route path="/home/a">
            <div>Content A</div>
          </Route>
          <Route path="/home/b">
            <div>Content B</div>
          </Route>
          <Route path="/home/c">
            <div>Content C</div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Home;
