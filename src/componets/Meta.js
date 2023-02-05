import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content="Nested component" />
      </Helmet>
    </>
  );
};

export default Meta;
