import React from "react";

export default function NextButton(props) {
  return (
    <svg className='control right' width={13} height={18} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke={props.stroke}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};
