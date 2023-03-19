import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login/LoginView.vue";
import RegisterView from "../views/login/RegisterView.vue";
// import HomeView from "../views/home/HomeView.vue";
import StudentView from "../views/student/StudentView.vue";
import StudentEnroll from "../views/student/StudentEnroll.vue";
import EmployeeView from "../views/employee/EmployeeView.vue";
import CompanyView from "../views/company/CompanyView.vue";
import CompanyEnroll from "../views/company/CompanyEnroll.vue";
const routes = [
  {
    path: "/",
    name: "home",
    redirect:"/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/student",
    name: "student",
    component: StudentView,
  },
  {
    path: "/student/enroll",
    name: "student_enroll",
    component: StudentEnroll,
  },
  {
    path:"/employee",
    name: "employee",
    component:EmployeeView
  },
  {
    path:"/company",
    name: "company",
    component:CompanyView
  },
  {
    path:"/company/enroll",
    name:"company_enroll",
    component:CompanyEnroll
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  //获取token
  const tokenStr = window.localStorage.getItem("token");
  if (!tokenStr) return next('/login');
  next();
});

export default router;
