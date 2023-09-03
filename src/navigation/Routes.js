import { lazy } from "react"

const Dashboard = lazy(() => import("../pages/Dashboard/component/Dashboard"))
const CreatePage = lazy(() => import("../pages/Dashboard/component/CreatePage"))
const UploadFiles = lazy(() => import("../pages/Dashboard/component/UploadFiles"))
const Login = lazy(() => import("../pages/Login/component/Login"))

/* DEFINING ROUTES */
export const routes = [
    { component: Login, public: true, path: '/' },
    { component: Dashboard, public: false, path: '/dashboard/blogArticles' },
    { component: CreatePage, public: false, path: '/dashboard/files' },
    { component: UploadFiles, public: false, path: '/dashboard/createPage' },

]
