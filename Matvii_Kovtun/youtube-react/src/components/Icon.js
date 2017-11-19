import React from 'react';
import "../style/Icon.css"


const Icon = ({icon, svg}) => (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
         focusable="false"
         class="icon">
        <g>
            <path d={svg}></path>
        </g>
    </svg>



)

export default Icon;