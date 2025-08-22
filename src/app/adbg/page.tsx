"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";


const VantaRings: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  type VantaEffect = { destroy: () => void };
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect) {
      // dynamically import VANTA
      import("vanta/dist/vanta.rings.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
        setVantaEffect(effect as VantaEffect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-white">Hello Vanta Rings 🚀</h1>
    </div>
  );
};

export default VantaRings;
