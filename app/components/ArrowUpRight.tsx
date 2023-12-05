import React from "react";

function ArrowUpRight({ props }: { props: any }) {
  return (
    <>
      <div className="flex w-1/2 h-1/2 relative">
        <div
          className={` w-full ${props.bgColor} self-center -rotate-45 rounded`}
          style={{ height: props.width + "px" }}
        ></div>
        <div
          className={`h-3/4 w-${props.width} ${props.bgColor}  right-0 top-0 absolute rounded`}
          style={{ width: props.width + "px" }}
        ></div>
        <div
          className={`h-${props.width} w-3/4 ${props.bgColor}  top-0 right-0 absolute rounded`}
          style={{ height: props.width + "px" }}
        ></div>
      </div>
    </>
  );
}

export default ArrowUpRight;
