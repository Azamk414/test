import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getRandomInt} from "../../js/utils";

export class Loading extends PureComponent {

    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 250)
    }

    render() {
        const
            height = [
                getRandomInt(8, 68),
                getRandomInt(8, 68),
                getRandomInt(8, 68)
            ]
        ;

        return (
            <svg width="68" height="76" viewBox="0 0 68 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)" filter="url(#filter0_i)">
                    <rect width="68" height="76" fill="#F4F3F2"/>
                    <line y1="0.5" x2="68" y2="0.5" stroke="#9BACB5"/>
                    <line y1="3.5" x2="68" y2="3.5" stroke="#9BACB5"/>
                    <line y1="6.5" x2="68" y2="6.5" stroke="#9BACB5"/>
                    <line y1="9.5" x2="68" y2="9.5" stroke="#9BACB5"/>
                    <line y1="12.5" x2="68" y2="12.5" stroke="#9BACB5"/>
                    <line y1="15.5" x2="68" y2="15.5" stroke="#9BACB5"/>
                    <line y1="18.5" x2="68" y2="18.5" stroke="#9BACB5"/>
                    <line y1="21.5" x2="68" y2="21.5" stroke="#9BACB5"/>
                    <line y1="24.5" x2="68" y2="24.5" stroke="#9BACB5"/>
                    <line y1="27.5" x2="68" y2="27.5" stroke="#9BACB5"/>
                    <line y1="30.5" x2="68" y2="30.5" stroke="#9BACB5"/>
                    <line y1="33.5" x2="68" y2="33.5" stroke="#9BACB5"/>
                    <line y1="36.5" x2="68" y2="36.5" stroke="#9BACB5"/>
                    <line y1="39.5" x2="68" y2="39.5" stroke="#9BACB5"/>
                    <line y1="42.5" x2="68" y2="42.5" stroke="#9BACB5"/>
                    <line y1="45.5" x2="68" y2="45.5" stroke="#9BACB5"/>
                    <line y1="48.5" x2="68" y2="48.5" stroke="#9BACB5"/>
                    <line y1="51.5" x2="68" y2="51.5" stroke="#9BACB5"/>
                    <line y1="54.5" x2="68" y2="54.5" stroke="#9BACB5"/>
                    <line y1="57.5" x2="68" y2="57.5" stroke="#9BACB5"/>
                    <line y1="60.5" x2="68" y2="60.5" stroke="#9BACB5"/>
                    <line y1="63.5" x2="68" y2="63.5" stroke="#9BACB5"/>
                    <line y1="66.5" x2="68" y2="66.5" stroke="#9BACB5"/>
                    <line y1="69.5" x2="68" y2="69.5" stroke="#9BACB5"/>
                    <line y1="72.5" x2="68" y2="72.5" stroke="#9BACB5"/>
                    <line y1="75.5" x2="68" y2="75.5" stroke="#9BACB5"/>
                    <line x1="0.521729" y1="1" x2="0.521729" y2="76" stroke="#9BACB5"/>
                    <line x1="3.56519" y1="1" x2="3.56519" y2="76" stroke="#9BACB5"/>
                    <line x1="6.60864" y1="1" x2="6.60864" y2="76" stroke="#9BACB5"/>
                    <line x1="9.6521" y1="1" x2="9.6521" y2="76" stroke="#9BACB5"/>
                    <line x1="12.6956" y1="1" x2="12.6956" y2="76" stroke="#9BACB5"/>
                    <line x1="15.739" y1="1" x2="15.739" y2="76" stroke="#9BACB5"/>
                    <line x1="18.7827" y1="1" x2="18.7827" y2="76" stroke="#9BACB5"/>
                    <line x1="21.8262" y1="1" x2="21.8262" y2="76" stroke="#9BACB5"/>
                    <line x1="24.8696" y1="1" x2="24.8696" y2="76" stroke="#9BACB5"/>
                    <line x1="27.9131" y1="1" x2="27.9131" y2="76" stroke="#9BACB5"/>
                    <line x1="30.9565" y1="1" x2="30.9565" y2="76" stroke="#9BACB5"/>
                    <line x1="34" y1="1" x2="34" y2="76" stroke="#9BACB5"/>
                    <line x1="37.0435" y1="1" x2="37.0435" y2="76" stroke="#9BACB5"/>
                    <line x1="40.0869" y1="1" x2="40.0869" y2="76" stroke="#9BACB5"/>
                    <line x1="43.1304" y1="1" x2="43.1304" y2="76" stroke="#9BACB5"/>
                    <line x1="46.1738" y1="1" x2="46.1738" y2="76" stroke="#9BACB5"/>
                    <line x1="49.2173" y1="1" x2="49.2173" y2="76" stroke="#9BACB5"/>
                    <line x1="52.261" y1="1" x2="52.261" y2="76" stroke="#9BACB5"/>
                    <line x1="55.3044" y1="1" x2="55.3044" y2="76" stroke="#9BACB5"/>
                    <line x1="58.3479" y1="1" x2="58.3479" y2="76" stroke="#9BACB5"/>
                    <line x1="61.3914" y1="1" x2="61.3914" y2="76" stroke="#9BACB5"/>
                    <line x1="64.4348" y1="1" x2="64.4348" y2="76" stroke="#9BACB5"/>
                    <line x1="67.4783" y1="1" x2="67.4783" y2="76" stroke="#9BACB5"/>
                    <rect style={{transition: 'all 400ms cubic-bezier(0, 0, 0.68, 0.74) 0s'}} x="48" y={8 - (height[0] - 68)} width="16" height={height[0]} fill="#F59D00"/>
                    <rect style={{transition: 'all 400ms cubic-bezier(0, 0, 0.68, 0.74) 0s'}} x="26" y={40 - (height[1] - 36)} width="16" height={height[1]} fill="#1D4963"/>
                    <rect style={{transition: 'all 400ms cubic-bezier(0, 0, 0.68, 0.74) 0s'}} x="4" y={24 - (height[2] - 52)} width="16" height={height[2]} fill="#F77600"/>
                </g>
                <defs>
                    <filter id="filter0_i" x="0" y="-12" width="68" height="88" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="-12"/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                    </filter>
                    <clipPath id="clip0">
                        <rect width="68" height="76" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        )
    }
}

Loading.propTypes = {};

export default Loading;