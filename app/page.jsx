"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const [imc, setIMC] = useState();

  const handleSubmit = () => {
    const den = height * height;
    const calc = weight / den;

    setIMC(Math.round(calc));
    console.log(Math.round(calc));
  };

  const imcRanges = [
    {
      id: "bajoPeso",
      label: "Peso Bajo",
    },
    {
      id: "pesoNormal",
      label: "Peso normal",
    },
    {
      id: "sobrePeso",
      label: "Sobrepeso",
    },
    {
      id: "obesidad",
      label: "Obesidad tipo 1",
    },
    {
      id: "obesidad2",
      label: "Obesidad tipo 2",
    },
    {
      id: "obesidad3",
      label: "Obesidad tipo 3",
    },
  ];

  // if (isNaN(imc)) {
  //   return <div>-------</div>;
  // }

  const ImcBox = () => {
    if (imc === undefined) {
      return <div></div>;
    }
    if (imc < 18.5) {
      return (
        <div className="bg-blue-400 p-3 rounded-lg mt-3">
          {imcRanges[0].label}
        </div>
      );
    }
    if ((imc > 18.5) & (imc < 24.9)) {
      return (
        <div className="bg-green-500 p-3 rounded-lg mt-3">
          {imcRanges[1].label}
        </div>
      );
    }
    if ((imc > 25) & (imc < 29.9)) {
      return (
        <div className="bg-yellow-600 p-3 rounded-lg mt-3">
          {imcRanges[2].label}
        </div>
      );
    }
    if ((imc > 30) & (imc < 34.9)) {
      return (
        <div className="bg-orange-600 p-3 rounded-lg mt-3">
          {imcRanges[3].label}
        </div>
      );
    }
    if ((imc > 35) & (imc < 39.9)) {
      return (
        <div className="bg-orange-700 p-3 rounded-lg mt-3">
          {imcRanges[4].label}
        </div>
      );
    }
    if (imc >= 40) {
      return (
        <div className="bg-orange-800 p-3 rounded-lg mt-3">
          {imcRanges[5].label}
        </div>
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-start justify-center p-12">
      <h1 className="font-bold text-5xl lg:text-8xl">Calculadora IMC</h1>
      <div className="rounded-lg backdrop-blur-md flex flex-row justify-start items-center w-2/4 h-[60vh]">
        <div className="flex flex-col justify-start items-start h-[25vh]">
          <div className="flex flex-col  mt-5 mb-7">
            <label htmlFor="weight" className="text-2xl font-semibold">
              Peso(Kg)
            </label>
            <input
              type="number"
              className=" border rounded-md border-gray-600 p-1 text-lg text-black"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mt-3">
            <label htmlFor="height" className="text-2xl font-semibold">
              Altura(m){" "}
              <p className="text-gray-200 text-sm">por ejempo: 1.75</p>
            </label>
            <input
              type="number"
              className="border rounded-md border-gray-600 p-1 text-lg text-black"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button
            className="py-2 px-3 mt-7 text-xl bg-zinc-900 text-white rounded-lg hover:text-black hover:bg-white duration-150 font-semibold "
            onClick={() => handleSubmit()}
          >
            Calcular
          </button>
        </div>
        <div className="w-2/4 flex justify-center items-center">
          <h3 className="text-6xl font-semibold text-center">
            {isNaN(imc) ? "" : imc}
            {isNaN(imc) ? "" : <ImcBox />}
          </h3>
        </div>
      </div>
    </main>
  );
}
