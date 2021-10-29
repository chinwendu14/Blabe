import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { HEADER_ROUTE, FOOTER_ROUTE, SECTION_ROUTE } from "./Constant.js";
const Header = lazy(() => import("../layouts/header/Header.js"));
const footer = lazy(() => import("../layouts/footer/Footer.js"));
// const footer = lazy(() => import("../layouts/footer/Footer.js"));
const section = lazy(() => import("../layouts/section/Section.js"));

const RouterConfig = () => {
  // const [email, setEmail] = useState("");
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Route path={HEADER_ROUTE} component={Header} />

      <Switch>
        <Route path={SECTION_ROUTE} component={section} />
      </Switch>
      <Route path={FOOTER_ROUTE} component={footer} />
    </Suspense>
  );
};

export default RouterConfig;
