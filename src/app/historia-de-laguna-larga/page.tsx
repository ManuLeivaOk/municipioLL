"use client";
import Image from "next/image";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import { Galleria } from "primereact/galleria";

const Page = () => {
  const images = [
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
      thumbnailImageSrc:
        "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ];
  const itemTemplate = (item: {
    itemImageSrc: string | undefined;
    alt: string | undefined;
  }) => {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  return (
    <div className="py-4 px-3 md:px-8 min-h-screen">
      <div className="p-grid">
        <div className="p-col-12 ">
          <Card title="Historia de Laguna Larga" className="p-mb-4 shadow-5">
            <div className="flex flex-column md:flex-row">
              <Galleria
                value={images}
                style={{ maxWidth: "640px" }}
                showThumbnails={false}
                showIndicators
                item={itemTemplate}
                className="w-full md:w-6"
              />

              <div className="md:px-7 md:py-5 flex flex-column justify-content-cente md:w-6">
                <p>
                  Laguna Larga es un pintoresco pueblo ubicado en el corazón de
                  la región. Su historia se remonta a principios del siglo XX,
                  cuando los primeros colonos comenzaron a establecerse en la
                  zona.
                </p>

                <p>
                  Laguna Larga es un pintoresco pueblo ubicado en el corazón de
                  la región. Su historia se remonta a principios del siglo XX,
                  cuando los primeros colonos comenzaron a establecerse en la
                  zona.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-grid shadow-5">
        <div className="p-col-12">
          <Accordion>
            <AccordionTab header="Orígenes">
              <p>
                El origen de Laguna Larga está vinculado con la búsqueda de
                nuevas tierras fértiles para la agricultura. Los primeros
                habitantes se asentaron alrededor de un pequeño lago que hoy es
                el centro del pueblo.
              </p>
            </AccordionTab>
            <AccordionTab header="Crecimiento y Desarrollo">
              <p>
                Durante las décadas siguientes, Laguna Larga experimentó un
                crecimiento significativo gracias a la llegada de nuevas
                familias y al desarrollo de infraestructuras básicas.
              </p>
            </AccordionTab>
            <AccordionTab header="El Presente">
              <p>
                Hoy en día, Laguna Larga es un lugar vibrante con una rica vida
                comunitaria y eventos culturales que celebran su historia y
                tradiciones.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Page;
