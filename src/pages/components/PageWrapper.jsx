import React from "react";

const PageWrapper = ({
    title,
    children
}) => {
    return (
        <div className="flex flex-col gap-2 px-2 py-2 min-h-[100dvh]">
            <h2 className="text-sm font-semibold underline">{title}</h2>
            {children}
        </div>
    )
}

export default PageWrapper;