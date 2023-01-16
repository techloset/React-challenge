import * as React from "react";

const Star = ({ fill = false, half = false, ...rest }) => {
  const fillpath =
    "M14.852 19.69c1.586.869 2.98-.183 2.677-2.024l-.544-3.306 2.306-2.342c1.284-1.302.753-3.008-1.022-3.277L15.08 8.26l-1.42-2.993c-.794-1.676-2.52-1.695-3.316-.015L8.92 8.26l-3.189.482c-1.773.269-2.307 1.973-1.022 3.277l2.307 2.342-.545 3.306c-.303 1.838 1.09 2.894 2.677 2.025L12 18.13l2.852 1.56Z";
  const unfillPath =
    "M14.948 13.75 18 10.59l-4.208-.65L12 6.083 10.208 9.94 6 10.59l3.052 3.16-.7 4.333L12 16.045l3.648 2.038-.7-4.332Zm-.096 5.94L12 18.13l-2.852 1.56c-1.588.87-2.98-.186-2.677-2.024l.545-3.306-2.307-2.342c-1.285-1.304-.75-3.008 1.022-3.277L8.92 8.26l1.425-3.008c.4-.841 1.031-1.257 1.663-1.25.629.005 1.257.428 1.654 1.265L15.08 8.26l3.188.482c1.776.269 2.306 1.975 1.023 3.277l-2.308 2.342.545 3.306c.303 1.84-1.091 2.893-2.677 2.025Z";
  return (
    <>
      {half ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 375 375"
          {...rest}
        >
          <defs>
            <clipPath id="a">
              <path d="M33.09 25.367h304.5v304.5H33.09Zm0 0" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="m337.59 135.336-109.469-3.7L185.34 25.368l-42.785 106.098-109.465 3.87 82.976 81.868-24.82 112.664 94.094-59.77 94.09 59.77-24.97-112.664ZM185.34 242.867V83.57l27.902 69.317 73.04 2.48-55.637 54.809 16.222 73.254Zm0 0" />
          </g>
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={fill ? fillpath : unfillPath}
            fill="#171717"
          />
          <mask
            id="a"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={4}
            width={16}
            height={16}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={fill ? fillpath : unfillPath}
              fill="#fff"
            />
          </mask>
        </svg>
      )}
    </>
  );
};

export default Star;
