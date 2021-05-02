import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RecordPage from "./containers/recordPage";

const RecordsScene = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:id`} component={RecordPage} exact />
      {/* <Route path='/create' component={Register}/> */}
    </Switch>
  );
};
export default RecordsScene;
