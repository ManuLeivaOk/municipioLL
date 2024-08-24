import ContactForm from "@/components/inicio/ContactForm";
import Hero from "@/components/inicio/Hero";
import News from "@/components/inicio/News";
import UsefulTelephoneNumbers from "@/components/inicio/UsefulTelephoneNumbers";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="surface-50 py-8 flex flex-row justify-content-center w-full">
        <ContactForm />
      </div>
      <div className="py-8 flex flex-row justify-content-center px-8">
        <UsefulTelephoneNumbers />
      </div>
      <div className="surface-50 py-8 flex flex-row justify-content-center">
        <News />
      </div>
    </div>
  );
};

export default Page;
