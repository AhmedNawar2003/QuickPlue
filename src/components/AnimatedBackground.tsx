"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    let stars: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      flicker: number;
    }[] = [];

    const createStars = () => {
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random(),
          flicker: Math.random() * 0.02,
        });
      }
    };

    const animate = () => {
      if (!context || !canvas) return;
      const bgColor = resolvedTheme === "dark" ? "#0f172a" : "#f8fafc";
      const starColor = resolvedTheme === "dark" ? "#ffffff" : "#1e293b";

      context.fillStyle = bgColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.opacity += star.flicker;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.flicker *= -1;
        }

        context.beginPath();
        context.globalAlpha = star.opacity;
        context.fillStyle = starColor;
        context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        context.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      context.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
      }
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default AnimatedBackground;
