import React from "react";

export const BaseTemplate = React.createContext<undefined>(undefined);

export function useBaseTemplate() {
    const context = React.useContext(BaseTemplate);

    if (!context) throw new Error("useBaseTemplate must be used within a BaseTemplateProvider");

    return context;
}

type Props = {
    children: React.ReactNode;
};

export function BaseTemplateProvider({children}: Props) {
    return <BaseTemplate.Provider value={{}}>{children}</BaseTemplate.Provider>;
}
