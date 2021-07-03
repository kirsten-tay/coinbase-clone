import React from "react";

function PhoneSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="680"
      height="550"
      fill="none"
      className="HeroVariant__StyledMobileImage-sc-1o7093z-6 kGJGpi"
      viewBox="0 0 680 956"
    >
      <circle cx="340" cy="428" r="340" fill="#F1F5FE"></circle>
      <g filter="url(#prefix__filter0_dd)">
        <path
          fill="url(#prefix__paint0_linear)"
          d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
        ></path>
        <path
          fill="url(#prefix__img1)"
          d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
        ></path>
        <g filter="url(#prefix__filter1_f)">
          <path
            stroke="url(#prefix__paint1_radial)"
            d="M213.5 15.5c-38.883 0-67.5 23.943-67.5 61.343V783.5c0 20.5 11.5 57 65.5 57"
          ></path>
        </g>
        <g filter="url(#prefix__filter2_f)">
          <path
            stroke="url(#prefix__paint2_radial)"
            d="M465.5 15c38.883 0 67.5 23.943 67.5 61.343V783c0 20.5-11.5 57-65.5 57"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd"
          width="519"
          height="956"
          x="48"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-32" dy="50"></feOffset>
          <feGaussianBlur stdDeviation="30"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="15"></feOffset>
          <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="prefix__filter1_f"
          width="72"
          height="830"
          x="143.5"
          y="13"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur"
            stdDeviation="1"
          ></feGaussianBlur>
        </filter>
        <filter
          id="prefix__filter2_f"
          width="72"
          height="830"
          x="463.5"
          y="12.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur"
            stdDeviation="1"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="prefix__paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(286.75008 212.24974 -632.54832 854.57482 179.75 390.25)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.2"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="prefix__paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 756.5 -2254.52 0 499 131)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="0.453" stopOpacity="0.2"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </radialGradient>
        <linearGradient
          id="prefix__paint0_linear"
          x1="539"
          x2="-169.5"
          y1="654"
          y2="799.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F3"></stop>
          <stop offset="0.64" stopColor="#CACED2"></stop>
        </linearGradient>
        <pattern
          id="prefix__img1"
          width="1"
          height="1"
          patternUnits="objectBoundingBox"
          viewBox="0 0 375 812"
        >
          <image
            width="375"
            height="812"
            href="https://assets.coinbase.com/assets/portfolio.352f1ebd5622fb93068757ca3a33b88b.svg"
          ></image>
        </pattern>
      </defs>
    </svg>
  );
}

export default PhoneSvg;
