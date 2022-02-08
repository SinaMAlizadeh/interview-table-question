import React from "react";
import { Error } from "./Error.styles.js";
type ErrorProps = {
  errorMessages: string[] | undefined;
};

function ErrorComponent({ errorMessages }: ErrorProps) {
  return (
    <Error>
      {errorMessages?.map((item) => (
        <div>{item}</div>
      ))}
    </Error>
  );
}

export default ErrorComponent;
