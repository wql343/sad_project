import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/login/LoginView.vue";
import RegisterView from "../views/login/RegisterView.vue";
// import HomeView from "../views/home/HomeView.vue";
import StudentView from "../views/student/StudentView.vue";
import StudentEnroll from "../views/student/StudentEnroll.vue";
import EmployeeView from "../views/employee/EmployeeView.vue";
import CompanyView from "../views/company/CompanyView.vue";
import CompanyEnroll from "../views/company/CompanyEnroll.vue";
import ManageEnroll from "../views/employee/pages/manager/ManageEnroll.vue";
import ManageTrain from "../views/employee/pages/manager/ManageTrain.vue";
import ManageMaterial from "../views/employee/pages/manager/ManageMaterial.vue";
import ManageCourse from "../views/employee/pages/executer/ManageCourse.vue";
import ManageTeacher from "../views/employee/pages/executer/ManageTeacher.vue";
import ManageAttendance from "../views/employee/pages/staff/ManageAttendance.vue";
import AddEnroll from "../views/employee/pages/manager/AddEnroll.vue";
import AddTeacher from "../views/employee/pages/manager/AddTeacher.vue";
import TrainDetail from "../views/employee/pages/manager/TrainDetail.vue";
import PublishCourse from "../views/employee/pages/executer/PublishCourse.vue";
import MyInfo from "../views/myinfo/MyInfo.vue";
import InfoEdit from "../views/myinfo/InfoEdit.vue";
import AddAtendance from "../views/employee/pages/staff/AddAttendance.vue"
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login",
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
    path: "/myinfo",
    name: "myinfo",
    component: MyInfo,
  },
  {
    path: "/myinfo/edit",
    name: "edit",
    component: InfoEdit,
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
    path: "/employee",
    name: "employee",
    redirect: "/employee/manageenroll",
    component: EmployeeView,
    children: [
      {
        path: "manageenroll",
        name: "employee_manageroll",
        component: ManageEnroll,
      },
      {
        path: "addenroll",
        name: "add_enroll",
        component: AddEnroll,
      },
      {
        path: "addteacher",
        name: "add_teacher",
        component: AddTeacher,
      },
      {
        path: "managetrain",
        name: "employee_managetrain",
        component: ManageTrain,
      },
      {
        path: "traindetail",
        name: "train_detail",
        component: TrainDetail,
      },
      {
        path: "managematerial",
        name: "employee_managematerial",
        component: ManageMaterial,
      },
      {
        path: "managecourse",
        name: "employee_managecourse",
        component: ManageCourse,
      },
      {
        path: "manageteacher",
        name: "employee_manageteacher",
        component: ManageTeacher,
      },
      {
        path: "manageattendance",
        name: "employee_manageattendance",
        component: ManageAttendance,
      },
      {
        path: "publishcourse",
        name: "employee_publishcourse",
        component: PublishCourse,
      },
      {
        path: "addattendance",
        name: "add_attendance",
        component: AddAtendance,
      },
    ],
  },
  {
    path: "/company",
    name: "company",
    component: CompanyView,
  },
  {
    path: "/company/enroll",
    name: "company_enroll",
    component: CompanyEnroll,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  //获取token
  const tokenStr = window.localStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
