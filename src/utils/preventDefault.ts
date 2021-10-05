import React from "react";

export const preventDefault = <T extends (e: any) => void>(fn: T) => {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
    }
}

export const stopPropagation = <T extends (e: any) => void>(fn: T) => {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.stopPropagation();
        fn(e);
    }
}

export const preventAll = <T extends (e: any) => void>(fn: T) => preventDefault(stopPropagation(fn));