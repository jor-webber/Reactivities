import React from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Route } from "react-router";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => {
          return (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route path="/activities" exact component={ActivityDashboard} />
              <Route path="/activities/:id" exact component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                exact
                component={ActivityForm}
              />
            </Container>
          </>
          );
        }}
      />
    </>
  );
}

export default observer(App);
