import React from "react";

export const BaseTemplate = React.createContext<undefined>(undefined);

export function useBaseTemplate() {
    const initialState = React.useContext(BaseTemplate);

    return initialState || {};
}
