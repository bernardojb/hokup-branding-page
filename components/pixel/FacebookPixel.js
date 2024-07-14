"use client";
import React from "react";
import Router from "next/router";

export default function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("445479778092008");
        ReactPixel.pageView();
        // Router.events.on("routeChangeComplete", () => {
        //   ReactPixel.pageView();
        // });
      });
  });
  return null;
}
