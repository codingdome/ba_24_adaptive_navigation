import React, { useState } from "react";

import IndicatorIcon from '../../assets/icon/app-indicator.svg';

const PositionContainer = ({ onChange, setIsOpen }) => {

    const grandparent = `flex flex-col gap-2 items-center p-4 bg-black bg-opacity-10 rounded-lg`;

    const buttonParent = `flex gap-4 items-center`;

    const [showOptions, setShowOptions] = useState(false);

    const setPosition = (value) => {
        onChange(value);
        setShowOptions(false);
        setIsOpen(false);
    }

    return (
        <div className={grandparent}>
            <button onClick={() => setShowOptions(true)} className="font-semibold text-xs">Navigation Position</button>
            {showOptions && (
                <div className={buttonParent}>
                    <button onClick={() => setPosition('tl')}><img className='transform scale-x-[-1]' src={IndicatorIcon} alt="" /></button>
                    <button onClick={() => setPosition('tr')}><img className='' src={IndicatorIcon} alt="" /></button>
                    <button onClick={() => setPosition('bl')}><img className='transform scale-x-[-1] scale-y-[-1]' src={IndicatorIcon} alt="" /></button>
                    <button onClick={() => setPosition('br')}><img className='transform scale-y-[-1]' src={IndicatorIcon} alt="" /></button>
                </div>
            )}
        </div>
    )
}

export default PositionContainer;