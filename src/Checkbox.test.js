import React from "react";
import {render} from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => {
    const { getByLabelTest} = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
//we need to handle the fire checkbox to make sure
//there is changes