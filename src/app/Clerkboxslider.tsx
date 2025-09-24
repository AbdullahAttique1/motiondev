import React from 'react';

const Clerkboxslider = () => {
  return (
    <div className="relative flex h-96 w-96 overflow-hidden rounded-2xl bg-[#212126]">
      <div className="designarea flex w-full">
        <div className="leftdesign relative h-[14rem] w-full">
          <SVGS />

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

function SVGS() {
  const svgs = [
    <svg
      role="img"
      fill="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
    >
      <title>Celestron</title>
      <path d="M12 .002c-6.6266 0-12 5.3712-12 12 0 6.6275 5.3734 11.996 12 11.996 1.7452 0 3.4033-.3698 4.8984-1.041C10.7585 21.2392 2.2788 17.3246 3.25 9.5312c.6406-5.1338 7.2145-8.46 13.8047-8.414C15.518.4012 13.8062.002 12 .002zm5.4297 1.8437c-5.0918-.049-9.3055 2.0411-9.6875 5.5566-.6046 5.5956 7.1547 8.8084 11.8437 10.1407.9056.2592 1.8969.4197 2.7676.5234C23.399 16.286 24 14.2111 24 12.002c0-4.2502-2.21-7.9827-5.541-10.1172a18.6755 18.6755 0 0 0-1.0293-.0391z" />
    </svg>,

    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white"
      fill="white"
    >
      <title>sonarr</title>
      <path d="M21.212 4.282c1.851 2.204 2.777 4.776 2.777 7.718 0 2.848-.867 5.344-2.602 7.489a934.355 934.355 0 0 1-2.101-2.095c-1.477-1.477-1.792-3.293-1.792-5.278 0-2.224.127-3.486 1.577-4.935l2.478-2.478a13.209 13.209 0 0 0-.337-.421Zm-17.7 16.193C1.708 18.678.6 16.59.188 14.213A11.84 11.84 0 0 1 .011 12c0-.28.006-.548.017-.802 0-.026.007-.052.022-.078.153-2.601 1.076-4.889 2.767-6.865-.108.127-.214.256-.316.387 0 0 1.351 1.346 2.329 2.323 1.408 1.409 1.726 3.215 1.726 5.151 0 1.985-.249 3.762-1.781 5.295-1.035 1.035-2.119 2.124-2.119 2.124.112.136.229.271.349.404.029-.027 1.297-1.348 2.123-2.175 1.638-1.637 1.928-3.528 1.928-5.648 0-2.072-.365-3.997-1.873-5.504a620.045 620.045 0 0 0-2.366-2.357c.168-.196.342-.388.523-.576l3.117 3.106-.194.195 1.903 1.898.547-.549L6.81 6.432l-.196.196L3.495 3.52c.01-.009.436-.416.643-.597.009.011 2.28 2.283 2.28 2.283 1.538 1.537 3.5 1.955 5.621 1.955 2.18 0 4.134-.442 5.731-2.038.907-.908 2.153-2.149 2.162-2.16.17.151.491.461.56.528l.013.013-3.111 3.028-.001.002-.197-.194-1.876 1.903.552.543 1.875-1.903-.197-.194 3.109-3.026c.193.203.377.41.553.619-.03.025-2.495 2.546-2.495 2.546-1.556 1.556-1.723 2.9-1.723 5.288 0 2.121.361 4.054 1.939 5.632a576.91 576.91 0 0 0 2.133 2.124c-.183.208-.599.645-.613.66l-3.066-3.174.195-.196-1.995-1.986-.546.549 1.995 1.986.195-.196 3.065 3.172c-.021.019-.385.362-.552.506-.01-.013-1.974-1.978-1.974-1.978-1.842-1.842-3.299-2.039-5.731-2.039-2.338 0-3.92.239-5.632 1.95-.944.944-2.078 2.085-2.089 2.099-.275-.23-.649-.594-.649-.594l3.019-3.024.199.192 1.854-1.925-.558-.538-1.854 1.926.199.191-3.016 3.022ZM12 8.672A3.33 3.33 0 0 0 8.672 12 3.33 3.33 0 0 0 12 15.328 3.33 3.33 0 0 0 15.328 12 3.33 3.33 0 0 0 12 8.672ZM4.52 2.6C6.665.867 9.162 0 12.011 0c2.88 0 5.394.88 7.541 2.639 0 0-1.215 1.209-2.136 2.13-1.496 1.496-3.334 1.892-5.377 1.892-1.985 0-3.829-.37-5.267-1.809L4.52 2.6Zm14.837 18.909a9.507 9.507 0 0 1-.342.256C16.994 23.255 14.659 24 12.011 24c-2.652 0-4.983-.745-6.993-2.235-.104-.074-.208-.15-.31-.227 0 0 1.096-1.101 2.053-2.058 1.602-1.602 3.09-1.804 5.278-1.804 2.28 0 3.651.166 5.377 1.892l1.941 1.941Z" />
    </svg>,
  ];
  return (
    <div>
      {svgs.map((svg) => (
        <div>{svg}</div>
      ))}
    </div>
  );
}

export default Clerkboxslider;
