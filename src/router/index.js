import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "cases",
    component: () => import("../pages/cases/CasesPage.vue")
  },
  {
    path: "/case-details",
    name: "case-details",
    component: () => import("../pages/cases/CaseDetailsPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
