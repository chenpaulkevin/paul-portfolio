import React from "react";

function ArrowUpRight({ props }: { props: any }) {
  return (
    <>
      <div className="flex w-1/2 h-1/2 relative">
        <div
          className={`h-[${props.width}px] w-full ${props.bgColor} self-center -rotate-45 roundaed`}
        ></div>
        <div
          className={`h-3/4 w-[${props.width}px] ${props.bgColor}  right-0 top-0 absolute rounded`}
        ></div>
        <div
          className={`h-[${props.width}px] w-3/4 ${props.bgColor}  top-0 right-0 absolute rounded`}
        ></div>
      </div>
    </>
  );
}

export default ArrowUpRight;
