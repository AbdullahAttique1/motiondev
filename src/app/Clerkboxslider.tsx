import React from 'react';

const Clerkboxslider = () => {
  return (
    <div className="relative flex h-96 w-96 overflow-hidden rounded-2xl bg-[#212126]">
      <div className="designarea flex w-full">
        <div className="leftdesign relative h-[14rem] w-full">
          <svg
            viewBox="0 0 109 216"
            fill="none"
            className="absolute top-[3.125rem] left-[1rem] h-[13.5rem] w-[6.8125rem] overflow-visible"
            aria-hidden="true"
          >
            <g filter="url(#social-background-filter)">
              <path
                fill="#fff"
                fillOpacity=".02"
                d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z"
                shapeRendering="crispEdges"
              ></path>
              <path
                stroke="#fff"
                strokeOpacity=".05"
                d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z"
                shapeRendering="crispEdges"
              ></path>
            </g>
            <defs>
              <filter
                id="social-background-filter"
                width="219"
                height="216"
                x="-110"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1860_5760"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>

        <div className="rightdesign relative h-[14rem] w-full rotate-y-180">
          <svg
            viewBox="0 0 109 216"
            fill="none"
            className="absolute top-[3.125rem] left-[1rem] h-[13.5rem] w-[6.8125rem] overflow-visible"
            aria-hidden="true"
          >
            <g filter="url(#social-background-filter)">
              <path
                fill="#fff"
                fill-opacity=".02"
                d="M 104.715 48.667 L 61.353 4.402 A 8 8 0 0 0 55.638 2 H -100 a 8 8 0 0 0 -8 8 V 206 a 8 8 0 0 0 8 8 H 99 A 8 8 0 0 0 107 206 V 54.266 C 107 52.172 106.18 50.163 104.715 48.667 Z"
                shape-rendering="crispEdges"
              ></path>
              <path
                stroke="#fff"
                stroke-opacity=".05"
                d="M 60.996 4.752 L 104.358 49.017 A 7.5 7.5 0 0 1 106.5 54.265 V 206 A 7.5 7.5 0 0 1 99 213.5 H -100 a 7.5 7.5 0 0 1 -7.5 -7.5 V 10 a 7.5 7.5 0 0 1 7.5 -7.5 H 55.638 A 7.5 7.5 0 0 1 60.996 4.752 Z"
                shape-rendering="crispEdges"
              ></path>
            </g>
            <defs>
              <filter
                id="social-background-filter"
                width="219"
                height="216"
                x="-110"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1860_5760"></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1860_5760"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* <div className="teaxtarea">
        <h1>Social Sign-on</h1>
        <p>
          Add high-conversion Social Sign-on (SSO) to your application in minutes. 20+ options and
          growing.
        </p>
      </div> */}
    </div>
  );
};

export default Clerkboxslider;
