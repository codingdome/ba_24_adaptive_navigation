import React from "react";

import Arrow from '../assets/icon/chevron-right-black.svg';

const OnPageNavButton = ({
    text,
    onClick
}) => {
    return (
        <button
            className="px-4 py-2 rounded-xl bg-black bg-opacity-10 flex items-center gap-2"
            onClick={onClick}
        >
            <p>{text}</p>
            <img className="w-[10px] h-[10px]" src={Arrow} alt="" />
        </button>
    )
}

export default OnPageNavButton;