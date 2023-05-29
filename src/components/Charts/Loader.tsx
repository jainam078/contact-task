import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="10" rx="2" ry="2" width="400" height="300" />
  </ContentLoader>
);
