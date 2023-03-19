import * as React from "react";

function SvgActionDelete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M14.149 19H5.85C4.83 19 4 18.214 4 17.245V6h12v11.245c0 .97-.829 1.755-1.851 1.755zM15.575 2.5H12.5v-.834a.834.834 0 00-.834-.833H8.333a.834.834 0 00-.833.833V2.5H4.424a1.09 1.09 0 00-1.091 1.09V5h13.333V3.59a1.09 1.09 0 00-1.09-1.09zm-7.242-.834h3.333V2.5H8.333v-.834z"
        fill="#333"
      />
    </svg>
  );
}

export default SvgActionDelete;
