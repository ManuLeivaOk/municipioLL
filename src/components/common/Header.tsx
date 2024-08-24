"use client";
import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import "./styles.css";

export default function Header() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => (window.location.href = "/inicio"),
    },
    {
      label: "Sobre Laguna Larga",
      icon: "pi pi-info-circle",
      command: () => (window.location.href = "/historia-de-laguna-larga"),
    },
    {
      label: "Contacto",
      icon: "pi pi-envelope",
      command: () => (window.location.href = "/contact"),
    },
  ];

  const end = (
    <Button
      icon="pi pi-menu"
      onClick={() => setVisibleSidebar(true)}
      className="p-button-text text-white"
    />
  );

  return (
    <>
      <Menubar model={items} end={end} className="p-mb-4" />

      <Sidebar
        visible={visibleSidebar}
        onHide={() => setVisibleSidebar(false)}
        className="p-sidebar-md text-white"
      >
        <Menu model={items} />
      </Sidebar>
    </>
  );
}
