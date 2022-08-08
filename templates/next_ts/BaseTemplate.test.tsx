import "@testing-library/jest-dom";
import React from "react";
import {render} from "@testing-library/react";

import {BaseTemplate} from "./index";

const defaultProps = {};

describe("/BaseTemplate", () => {
    it("should render BaseTemplate component", () => {
        render(<BaseTemplate {...defaultProps} />);

       
    });
});
