import React from "react";
import { Route, Switch } from "react-router-dom";
import RecordPage from "./containers/recordPage";

const RecordsScene = () => (
  <Switch>
    <Route path="/:id" component={RecordPage} />
    {/* <Route path='/create' component={Register}/> */}
  </Switch>
);

export default RecordsScene;
