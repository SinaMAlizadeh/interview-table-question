import React from "react";
import { Error } from "./Error.styles";
type ErrorProps = {
  errorMessages: string[] | undefined;
};

function ErrorComponent({ errorMessages }: ErrorProps) {
  return (
    <Error>
      <div>
        <span> &#9888;</span> Something wrong
      </div>
      {errorMessages?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Error>
  );
}

export default ErrorComponent;
