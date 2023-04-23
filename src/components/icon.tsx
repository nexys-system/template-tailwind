import React from "react";

export default ({ name }: { name: string }) => (
  <i className={`fa fa-${name}`} />
);
