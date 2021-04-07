
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: " Management",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Administration",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Products",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Customers",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Orders",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Store",
    icon: "ni ni-circle-08 text-blue",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Scheduling",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Configure",
    icon: "ni ni-single-02 text-green",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
