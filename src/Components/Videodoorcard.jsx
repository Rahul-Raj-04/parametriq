import React from "react";
import { Link } from "react-router-dom";
import { TbEyeCheck } from "react-icons/tb";
function Videodoorcard({
  title = "demo",
  description = "lfyjyhgjyhghgg",
  icon = <TbEyeCheck />,
}) {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  ">
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <Link to="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            {title}
          </h5>
        </Link>
        <p
          className="mb-3 font-normal text-black"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          to="#"
          className="inline-flex font-medium items-center text-blue-600 hover:underline  "
        >
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] hidden"
            aria-hidden="true"
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Videodoorcard;
