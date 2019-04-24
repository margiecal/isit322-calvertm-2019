import React from "react";

export const Qux = ({queryServer}) => (
    <div>

        //this will have two buttons, enclosed by a div, not this button
    <button data-url="/qux-you-rang" onClick={queryServer}>Ring Qux</button>
    </div>
);