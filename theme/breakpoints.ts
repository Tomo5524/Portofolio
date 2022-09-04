const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  // custom: customMediaQuery,
  // desktop: customMediaQuery(922),
  // tablet: customMediaQuery(768),
  // phone: customMediaQuery(576),
  xl: customMediaQuery(1440),
  lg: customMediaQuery(1280),
  md: customMediaQuery(768),
  sm: customMediaQuery(480),
  // desktop: "only screen and (min-width: 1400px)",
  // laptop: "only screen and (min-width: 1200px) and (max-width: 1399px)",
  // lg: "only screen and (min-width: 992px) and (max-width: 1199px)",
  // md: "only screen and (min-width: 768px) and (max-width: 991px)",
  // xs: "(max-width: 767px)",
  // sm: "only screen and (min-width: 575px) and (max-width: 767px)",
  // xxs: "only screen and (min-width:320px) and (max-width: 374px)",
  // xsip: "only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
  // xsip5:
  //   "only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
  // xsipx:
  //   "only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
  // xsipxpro:
  //   "only screen and and (min-device-width: 414px) and (max-device-height: 926px) and (-webkit-device-pixel-ratio: 3)",
  // xsipplus:
  //   "only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
  // xsipxr:
  //   "only screen and (min-device-width : 414px) and (max-device-height : 896px) and (-webkit-device-pixel-ratio : 2)",
  // xsandroid:
  //   "only screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm)",
};
