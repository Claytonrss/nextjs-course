"use client";
import React from "react";

export default function Width() {
  const [ativar, setAtivar] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: ativar ? "#680" : "#b00" }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivar((b) => !b)}>Click</button>
    </div>
  );
}
