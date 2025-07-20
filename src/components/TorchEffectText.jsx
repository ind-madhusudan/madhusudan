import React, { useRef, useEffect } from "react";
// import "./TorchEffectText.css";

const TorchEffectText = () => {
  const greenRef = useRef(null);

  useEffect(() => {
    const el = greenRef.current;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const mask = `radial-gradient(circle 120px at ${x}px ${y}px, white 0%, transparent 100%)`;

      el.style.webkitMaskImage = mask;
      el.style.maskImage = mask;
    };

    el.parentElement.addEventListener("mousemove", handleMouseMove);
    return () =>
      el.parentElement.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="torch-container">
      <h1 className="torch-text text-5xl lg:text-8xl">
        Serenity Opens Under Midnight's Illusion.
        <span className="green-layer" ref={greenRef}>
          Serenity Opens Under Midnight's Illusion.
        </span>
      </h1>
    </div>
  );
};

export default TorchEffectText;
