import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home");
const Category = () => import("views/category/category");
const Shop = () => import("views/shop/Shop");
const Profile = () => import("views/profile/Profile");

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },

  {
    path: "/category",
    component: Category
  },

  {
    path: "/shop",
    component: Shop
  },

  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
