import React, { useRef, useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ProductViewerProps {
  imageSrc: string;
  alt: string;
}

export const ProductViewer: React.FC<ProductViewerProps> = ({ imageSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [zoom, setZoom] = useState(1);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Load and render product on canvas with dynamic lighting & angle transform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;

    let animId: number = 0;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle ground plane ellipse shadow responding to rotation
      ctx.save();
      ctx.translate(centerX, centerY + 85 * zoom);
      ctx.beginPath();
      const shadowSkew = Math.sin(rotationY) * 20;
      ctx.ellipse(shadowSkew, 0, 160 * zoom, 24 * zoom, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(36, 31, 33, 0.08)';
      ctx.fill();
      ctx.restore();

      // Render product with perspective rotation
      if (img.complete && img.naturalWidth > 0) {
        ctx.save();
        ctx.translate(centerX, centerY);

        // Perspective transform simulation
        const cosAngle = Math.cos(rotationY);
        const scaleX = cosAngle * zoom;
        const scaleY = zoom;

        ctx.transform(scaleX, Math.sin(rotationY) * 0.06, 0, scaleY, 0, 0);

        const aspect = img.naturalWidth / img.naturalHeight;
        const maxW = Math.min(width * 0.75, 420);
        const maxH = maxW / aspect;

        ctx.drawImage(img, -maxW / 2, -maxH / 2, maxW, maxH);
        ctx.restore();
      }

      ctx.restore();
    };

    img.onload = render;
    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [imageSrc, zoom, rotationY]);

  // Handle pointer drag
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotationY((prev) => prev + delta * 0.008);
    setStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-16/10 bg-white rounded-3xl border border-[#241F21]/8 shadow-sm overflow-hidden flex items-center justify-center select-none"
    >
      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      />

      {/* Floating Drag Prompt */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#F2EFEA] text-[11px] font-mono text-[#524945] pointer-events-none border border-[#241F21]/10">
        Drag horizontally to rotate angle
      </div>

      {/* Zoom & Reset Controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#241F21]/15 shadow-sm">
        <button
          onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
          aria-label="Zoom in"
          className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors cursor-pointer"
        >
          <ZoomIn size={14} />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))}
          aria-label="Zoom out"
          className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors cursor-pointer"
        >
          <ZoomOut size={14} />
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setRotationY(0);
          }}
          aria-label="Reset view"
          className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors cursor-pointer"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};
