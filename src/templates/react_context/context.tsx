import React from "react";

export const BaseTemplateContext = React.createContext<undefined>(undefined);

export function useBaseTemplate() {
    const context = React.useContext(BaseTemplateContext);

    if (!context) throw new Error("useBaseTemplate must be used within a BaseTemplateProvider");

    return context;
}

type Props = {
    children: React.ReactNode;
};

export function BaseTemplateProvider({children}: Props) {
    return <BaseTemplateContext.Provider value={{}}>{children}</BaseTemplateContext.Provider>;
}
