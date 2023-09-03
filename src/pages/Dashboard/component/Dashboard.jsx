import React from "react";
import DashboardDrawer from "../../../components/Drawer/component/Drawer";
import BlogArticles from "./BlogArticles";
import { Outlet } from "react-router-dom";

const Dashboard=()=>{

    return(
        <div>
           <DashboardDrawer component={<BlogArticles/>}/>
           {/* <Outlet /> */}
        </div>
    )
}
export default Dashboard