import { createRouter, createWebHistory } from "vue-router";
import Login from "../view/Login.vue";
import Home from "../view/Admin/Home.vue";
import Monitor from "../view/Admin/Monitor.vue";
import AdminLayout from "../layout/AdminLayout.vue";
import MonitorLayout from "../layout/MonitorLayout.vue";
import { UserService } from "../api/user";
import store from "../store";
import MonitorCR from "../view/Admin/MonitorCR.vue";

const routes = [
  {
    path: "/",
    redirect: "/monitor",
  },
  {
    path: "/monitor/signin",
    name: "SignIn",
    component: Login,
  },
  {
    path: "/monitor/select",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/monitor",
    name: "MonitorLayout",
    component: MonitorLayout,
    children: [
      {
        path: "",
        name: "Monitor",
        component: Monitor,
      },
    ],
  },
  {
    path: "/monitorCR",
    name: "MonitorLayout",
    component: MonitorLayout,
    children: [
      {
        path: "",
        name: "MonitorCR",
        component: MonitorCR,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const Authorize = async () => {
  let authorize = false;

  const token = localStorage.getItem("token");

  if (!token) {
    authorize = false; // ไม่มี token = กลับ login
  } else if (store.state.user) {
    authorize = true; // มี user ใน store แล้ว
  } else {
    const user = new UserService();
    await user
      .AuthState()
      .then((res) => {
        if (res.message === "Successfully!") {
          store.state.user = res.data;
          store.state.name = res.data.name;
          store.state.userId = res.data._id;
          store.state.siteId = res.data.siteid;
          authorize = true;
        } else {
          authorize = false;
        }
      })
      .catch(() => {
        authorize = false;
      });
  }
  return authorize;
};

router.beforeEach((to, from, next) => {
  next(); // ปล่อยให้เข้าทุกหน้าได้ ไม่ต้องตรวจอะไร
});

export default router;
