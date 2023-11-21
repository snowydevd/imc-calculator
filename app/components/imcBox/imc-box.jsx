import React from "react";

export default function ImcBox() {
  return (
    <div>
      {() => {
        if (imc < 18.5) {
          return (
            <div className="bg-blue-400">{console.log(imcRanges[1].label)}</div>
          );
        }
        if ((imc > 18.5) & (imc < 24.9)) {
          return <div className="bg-green-400">{imc}</div>;
        }
      }}
      <h1>{imc}</h1>
    </div>
  );
}
