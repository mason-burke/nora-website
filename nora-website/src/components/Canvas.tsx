import { useRef } from 'react';

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;

    const ctx = canvasRef.current?.getContext('2d');

    if (ctx) {
      // Cubic curves example
      console.log(x, y);
      ctx.beginPath();
      ctx.moveTo(x, y);
      // const img = document.createElement('img');
      // ctx.drawImage('../../assets/heart.svg', -10, -10);
    }
  };
  return (
    <>
      <canvas
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
        ref={canvasRef}></canvas>
      <img src="../"></img>
    </>
  );
};
