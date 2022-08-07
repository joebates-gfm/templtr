import "@testing-library/jest-dom";
import React from "react";
import {render} from "@testing-library/react";

import {Base} from "./index";

const defaultProps = {};

describe("apps/manage/molecules/Base", () => {
    it("should render base component", () => {
        render(<Base {...defaultProps} />);

       
    });
});
