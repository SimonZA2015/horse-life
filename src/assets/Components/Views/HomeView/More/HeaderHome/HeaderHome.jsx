import React from "react";

import style from './HeaderHome.module.css';
import {images} from "../../../../../Store/config";
import {NavLink} from "react-router-dom";

const HeaderHome = (props) => {

    return (
        <div className={style.body}>
            <img className={style.logo} src={images.logo}/>
            <div/>
            <NavLink to={'/login'}>
                <div className={style.login}><span>Log in</span></div>
            </NavLink>
        </div>
    )
};

export default HeaderHome;