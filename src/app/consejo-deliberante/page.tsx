"use client";
import React from "react";
import Miembros from "../../components/consejo.deliberante/Miembros";
import BoletinesOficiales from "../../components/consejo.deliberante/BoletinesOficiales";

const Page = () => {
  return (
    <div className="">
      <div className="px-4 md:px-8 py-8">
        <h3 className="font-bold text-center text-3xl">
          Miembros del Honorable Consejo Deliberante
        </h3>
        <Miembros />
      </div>
      <div className="surface-50 px-4 md:px-8 py-8">
        <h3 className="font-bold text-center text-3xl my-8">
          Boletines oficiales
        </h3>
        <BoletinesOficiales />
      </div>
    </div>
  );
};

export default Page;
