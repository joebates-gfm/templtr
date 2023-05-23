import React from "react";

export interface BaseTemplateProps {
    className?: string;
}

export default function BaseTemplate({className}: BaseTemplateProps) {
    return <div className={className}>BaseTemplate</div>;
}
