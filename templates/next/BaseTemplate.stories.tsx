import {Story} from "@storybook/react";
import React from "react";
import BaseTemplate, {BaseTemplateProps} from "./BaseTemplate";

export default {
    title: "BaseTemplate",
    args: {},
    component: BaseTemplate,
};

const Template: Story<BaseTemplateProps> = (args) => <BaseTemplate {...args} />;

export const Default = Template.bind({});
