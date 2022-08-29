// #region Global Imports
import * as React from "react";
import { NextPage } from "next";

const Error = ({
  statusCode,
}) => {
  return (
    <div style={{height: 700}}>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

export default Error;
