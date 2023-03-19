import * as React from "react";

function SvgActionEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.632 2.368a2.614 2.614 0 01.005 3.697l-.93.932-3.703-3.703.931-.93a2.614 2.614 0 013.697.004zM1.6 14.4l.925-4.628L8.08 4.22 11.78 7.92l-5.554 5.554L1.6 14.4z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgActionEdit;
