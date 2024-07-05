import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./users/pages/Users";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
