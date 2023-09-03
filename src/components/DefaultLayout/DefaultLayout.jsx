import React, {  Suspense ,lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../navigation/RouteTypes";
import NotFound from "../../navigation/NotFound";
import { routes } from "../../navigation/Routes";
import Loader from "../Loader/component/Loader";

function DefaultLayout() {
    return (
        <>
        <Suspense  fallback={<Loader open={true}/>}>
            <Routes>
                {routes.map(({ component: Component, path, public: publicRoute }, index) => {
                    if (publicRoute) {
                            return (
                                <Route path={path} key={index} element={
                                    <PublicRoutes>
                                        <Component />
                                    </PublicRoutes>} />
                            )
                        } else {
                            return (
                                <Route path={path} key={index} element={
                                    <PrivateRoutes>
                                        <Component />
                                    </PrivateRoutes>} />
                            )
                        }
                    })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        </>
    );
}

export default DefaultLayout;
