import React from "react";
import Miembros from "../../components/consejo.deliberante/Miembros";

const Page = () => {
  return (
    <div className="">
      <div className="px-4 md:px-8 my-8">
        <h3 className="font-bold text-center text-3xl">
          Miembros del Honorable Consejo Deliberante
        </h3>
        <Miembros />
      </div>
      <div className="surface-50 px-4 md:px-8 my-8">
        <h3 className="font-bold text-center text-3xl my-8">
          Boletines oficiales
        </h3>
      </div>
    </div>
  );
};

export default Page;
