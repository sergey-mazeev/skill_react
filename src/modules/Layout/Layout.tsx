import React from "react";

interface ILayoutProps {
    children?: React.ReactNode;
}

export default ({children}: ILayoutProps) => {
    return (
        <div className="page-layout">
            {children}
        </div>
    );
}