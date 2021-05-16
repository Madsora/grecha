import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import RecordCreatePage from "./containers/createRecord";
import RecordPage from "./containers/recordPage";
import RecordsPage from "./containers/recordsPage";

const RecordsScene = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} component={RecordsPage} exact />
      <Route path={`${path}/create`} component={RecordCreatePage} />
      <Route path={`${path}/:id`} component={RecordPage} exact />
    </Switch>
  );
};
export default RecordsScene;
