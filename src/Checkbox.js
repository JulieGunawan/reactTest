import React, {useReducer} from "react";

export function Checkbox() {
    const [checked, toggle] = useReducer (
        (checked) => !checked,
        false
    );
    return (
        <>
            <label for="checkbox">
                {check ? "checked":"not checked"}
            </label>
            <input 
                type="checkbox" 
                value={checked}
                onChange={toggle}
            />
        </>
    );
}