import React from 'react';
import "../style/Icon.less"


const Icon = ({icon, svg}) => (

    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
         focusable="false"
         className={"icon icon_" + icon}>
        <g>
            <path d={svg}></path>
        </g>
    </svg>



);

export default Icon;