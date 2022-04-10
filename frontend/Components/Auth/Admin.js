import React, { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";


const Admin = ({ children }) => {
    useEffect(() => {
        //if user is not authenticated redirect to login page
        if(!isAuth()){
            Router.push("/login");
        }else if(isAuth().role !== 1){
            //if user is not an admin redirect to dashboard
            Router.push("/");
        }
    } , [])

    return <React.Fragment>{children}</React.Fragment>
}

export default Admin;