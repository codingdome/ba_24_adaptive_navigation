import { Divide } from "hamburger-react";
import React from "react";

const SuccessPage = ({
    text
}) => {
    return (
        <div className="w-full h-full bg-green-500 text-white flex flex-col justify-center items-center py-12 gap-4">
            <p className="font-semibold text-3xl">Ziel erreicht!</p>
            <p className="text-center">{text}</p>
        </div>
    )
}

export default SuccessPage;