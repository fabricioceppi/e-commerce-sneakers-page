import React from "react";

export default function PreviousButton(props) {
  return (
    <svg className='control left' width={12} height={18} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke={props.stroke}
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};
