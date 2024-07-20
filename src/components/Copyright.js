import React from "react";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return <p className="stamp">Copyright © {currentYear} Baseklinks. All rights reserved</p>;
}

export default Copyright;
