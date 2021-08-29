import React from "react";
import {images} from "../../../../../Store/config";

import style from './LoginPanel.module.css';

const LoginPanel = (props) => {

    function goAthor() {
        window.location.href = "https://denishik.ru";
    }

    return (
        <div className={style.body}>
            <div className={style.photosBlock}>
                <img className={style.logo} alt={'logo image'} src={images.logo} />
                <img className={style.athor} onClick={goAthor} alt={'athor image'} src={images.athor} />
            </div>
            <div className={style.inputsBlock}>
                <input placeholder={'Login'} />
                <input placeholder={'Password'} />
                <div className={style.go}><span>Log in</span></div>
            </div>
        </div>
    )
};

export default LoginPanel;