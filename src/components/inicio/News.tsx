import { Card } from "primereact/card";
import React from "react";

const News = () => {
  const exampleNews = [
    {
      id: 1,
      title: "Noticia 1",
      date: "2024-08-24",
      summary:
        "Resumen de la noticia 1. Este es un breve resumen de la noticia.",
      content: "Contenido completo de la noticia 1.",
    },
    {
      id: 2,
      title: "Noticia 2",
      date: "2024-08-23",
      summary:
        "Resumen de la noticia 2. Este es un breve resumen de la noticia.",
      content: "Contenido completo de la noticia 2.",
    },
    {
      id: 3,
      title: "Noticia 3",
      date: "2024-08-22",
      summary:
        "Resumen de la noticia 3. Este es un breve resumen de la noticia.",
      content: "Contenido completo de la noticia 3.",
    },
  ];
  const header = <img alt="Card" src="/laguna-larga.jpg" />;

  return (
    <div>
      <div className="flex flex-row justify-content-center mb-3">
        <span className="text-blue-600 font-bold text-3xl">
          Mantente informado
        </span>
      </div>
      <div className="flex flex-row justify-content-center flex-wrap px-5">
        <Card
          title="Advanced Card"
          subTitle="Card subtitle"
          header={header}
          className="md:w-25rem mx-3 my-3 shadow-5"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>

        <Card
          title="Advanced Card"
          subTitle="Card subtitle"
          header={header}
          className="md:w-25rem mx-3 my-3 shadow-5"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>

        <Card
          title="Advanced Card"
          subTitle="Card subtitle"
          header={header}
          className="md:w-25rem mx-3 my-3 shadow-5"
        >
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default News;
