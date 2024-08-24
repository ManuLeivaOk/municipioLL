import { Button } from "primereact/button";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-5 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">
            Municipio de Laguna Larga
          </span>
          <div className="text-6xl text-primary font-bold mb-3">
            El corazón de Córdoba
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Button
            label="Contacto"
            type="button"
            className="mr-3 p-button-raised"
          />
          <Button
            label="Novedades"
            type="button"
            className="p-button-outlined"
          />
        </section>
      </div>
      <div className="hidden md:block md:col-7 overflow-hidden">
        <img
          src="/laguna-larga.jpg"
          alt="hero-1"
          className="md:ml-auto block md:h-full"
          style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
  );
};

export default Hero;
