"use client";
import React from "react";

const InstallBootstrap = () => {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
};

export default InstallBootstrap;
