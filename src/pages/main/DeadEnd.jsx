import React from "react";

import IconDeadEnd from '../../assets/icon/sign-dead-end.svg';

const DeadEnd = () => {
    return (
        <div className='flex flex-col gap-8 items-center pt-12 min-h-[100dvh]'>

            <p className="text-center font-medium text-4xl max-w-[300px]">Hier gehts leider nicht weiter...</p>

            <img className="object-contain object-center h-[200px]" src={IconDeadEnd} alt="" />

        </div>
    )
};

export default DeadEnd;