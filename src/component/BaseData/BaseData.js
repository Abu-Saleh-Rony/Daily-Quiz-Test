import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export const LoadContext = createContext([]);

const BaseData = () => {
    const loadData = useLoaderData().data

    return (
        <LoadContext.Provider value={loadData}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </LoadContext.Provider>
    );
};

export default BaseData;
