import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Height = (props, ref) => {
    const refHeight = useRef();

    useImperativeHandle(ref, () => ({
        getHeight: () => refHeight.current.offsetHeight
    }));
    return <div ref={refHeight}>{props.children}</div>;
};
export default forwardRef(Height);