import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import {images} from "../../../../../Store/config";

import style from './SliderHome.module.css';

const SliderHome = (props) => {

    return (
        <div className={style.body}>
            <SimpleImageSlider
                width={'100%'}
                height={'70%'}
                images={images.sliderHome}
                showBullets={true}
                showNavs={true}
            />
        </div>
    )
};

export default SliderHome;