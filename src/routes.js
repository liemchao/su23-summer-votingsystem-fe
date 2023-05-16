import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard/index"));
const MyProfile = React.lazy(() => import("./pages/MyProfile/MyProfile"));


const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/Dashboard/MyProfile", name: "MyProfile", component: MyProfile }, 
 


];

export default routes;
