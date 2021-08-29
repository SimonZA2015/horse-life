import React from "react";

import style from './LoginView.module.css';
import LoginPanel from "./More/LoginPanel/LoginPanel";

const LoginView = (props) => {

    return (
        <div className={style.body}>
            <LoginPanel />
        </div>
    )
};

export default LoginView;