import React from "react";

export default (key?: string) => {
    return <E extends {}, T extends React.ComponentType<E>>(component: T) =>
        (props: E, index: number) =>
            React.createElement(
                component,
                {...props, key: key ? props[key as keyof E] : index},
                [],
            )
}