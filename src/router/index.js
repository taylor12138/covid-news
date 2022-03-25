import React, { useRef, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Vaccine from "@/views/vaccine";
import Rumour from "@/views/rumour";
import People from "@/views/people";
import { changeOffsetTopAction } from "@/redux/router/actions";

function Router(props) {
  const { changeOffsetTopAction } = props;
  const routerRef = useRef(null);
  useEffect(() => {
    changeOffsetTopAction(routerRef.current.offsetTop);
    return () => {};
  }, [changeOffsetTopAction]);
  return (
    <div
      style={{ width: "60%", backgroundColor: "rgb(255,255,255)" }}
      ref={routerRef}
    >
      <Switch>
        <Route path="/vaccine" component={Vaccine}></Route>
        <Route path="/rumour" component={Rumour}></Route>
        <Route path="/people" component={People}></Route>
        <Redirect from="/" to="/vaccine" exact />
      </Switch>
    </div>
  );
}
export default connect(null, {
  changeOffsetTopAction,
})(Router);
