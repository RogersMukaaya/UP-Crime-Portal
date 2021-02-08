import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "cases",
    component: () => import("../pages/cases/casesPage.vue")
  },
  {
    path: "/case-details",
    name: "case-details",
    component: () => import("../pages/cases/caseDetailsPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
