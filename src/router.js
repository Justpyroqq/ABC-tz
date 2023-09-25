import Vue from "vue";
import Router from "vue-router";
import startPage from "@/pages/startPage";
import testPage from "@/pages/testPage";
import recordingPage from "@/pages/recordingPage";
import resultPage from "@/pages/resultPage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Start",
      path: "/",
      component: startPage,
    },
    {
      name: "Test",
      path: "/test",
      component: testPage,
    },
    {
      name: "Recording",
      path: "/recording",
      component: recordingPage,
    },
    {
      name: "Result",
      path: "/result",
      component: resultPage,
    },
  ],
});


export default router;
