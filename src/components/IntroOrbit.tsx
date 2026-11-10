import React, { useRef, useEffect } from 'react';

interface PerspectiveSprite {
  img: HTMLImageElement;
  worldX: number;
  worldY: number;
  z: number;
  baseSize: number;
  speed: number;
  rotation: number;
  vRot: number;
  baseOpacity: number;
}

export const IntroOrbit: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isRunning = true;
    let inView = true;

    // Verified local image assets from public/assets/floema/
    const assetUrls = [
      '/assets/floema/byside-bench-plaza.png',
      '/assets/floema/palmer-tee-sign.png',
      '/assets/floema/trail-recycled-plastic-trail-marker.png',
      '/assets/floema/clock-on-spot-palmer.png',
      '/assets/floema/royal-ball-pyramid.png',
      '/assets/floema/entrance-totem.png',
      '/assets/floema/tee-number-cube.png',
      '/assets/floema/arrow-directional-sign.png',
      '/assets/floema/bag-stand-palmer.png',
      '/assets/floema/water-cooler-palmer.png',
      '/assets/floema/cycling-route-directional-sign.png',
      '/assets/floema/interpretive-lectern-panel.png',
      '/assets/floema/catalogue-cover-of-the-details-collection.png',
      '/assets/floema/catalogue-golf-collection-2.png',
      '/assets/floema/catalogue-golf-collection.png',
      '/assets/floema/par-3.png',
      '/assets/floema/information-panel.png',
      '/assets/floema/liatris-planter.jpg',
      '/assets/floema/belleville-bench.jpg',
      '/assets/floema/water-fountain-frame.jpg',
      '/assets/floema/oxalis-planter.jpg'
    ];

    // Preload all assets
    const loadedImages: HTMLImageElement[] = [];
    assetUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decode().catch(() => {});
      img.onload = () => {
        loadedImages.push(img);
      };
    });

    const getRandomImage = (): HTMLImageElement => {
      if (loadedImages.length > 0) {
        return loadedImages[Math.floor(Math.random() * loadedImages.length)];
      }
      const fallback = new Image();
      fallback.src = assetUrls[Math.floor(Math.random() * assetUrls.length)];
      return fallback;
    };

    // Perspective Projection Constants
    const FOCAL_LENGTH = 500;
    const Z_FAR = 2200;
    const Z_NEAR = -180;
    const TOTAL_SPRITES = 22; // 18-24 visible simultaneously

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Helper: generate balanced world coordinates around the perimeter
    // Ensuring medium and foreground sprites NEVER intersect the protected headline zone
    let zoneCounter = 0;
    const createPerimeterPosition = () => {
      // 8 perimeter zones distributed across all 4 quadrants and perimeter corridors
      const zoneIndex = zoneCounter % 8;
      zoneCounter++;

      let wx = 0;
      let wy = 0;

      // Protected headline box bounds in viewport coordinates:
      // horizontally: centered 58% of viewport => width * 0.29 half-width
      // vertically: from roughly 34% to 64% => height * 0.15 half-height
      // Add safe buffer
      const safeHalfW = width * 0.31;
      const safeHalfH = height * 0.18;

      switch (zoneIndex) {
        case 0: // Top-Right Quadrant
          wx = safeHalfW + Math.random() * (width * 0.32);
          wy = -(safeHalfH + Math.random() * (height * 0.32));
          break;
        case 1: // Top-Left Quadrant
          wx = -(safeHalfW + Math.random() * (width * 0.32));
          wy = -(safeHalfH + Math.random() * (height * 0.32));
          break;
        case 2: // Bottom-Left Quadrant
          wx = -(safeHalfW + Math.random() * (width * 0.32));
          wy = safeHalfH + Math.random() * (height * 0.32);
          break;
        case 3: // Bottom-Right Quadrant
          wx = safeHalfW + Math.random() * (width * 0.32);
          wy = safeHalfH + Math.random() * (height * 0.32);
          break;
        case 4: // Left Flank
          wx = -(width * 0.34 + Math.random() * (width * 0.30));
          wy = (Math.random() - 0.5) * (height * 0.40);
          break;
        case 5: // Right Flank
          wx = width * 0.34 + Math.random() * (width * 0.30);
          wy = (Math.random() - 0.5) * (height * 0.40);
          break;
        case 6: // Upper Header Canopy
          wx = (Math.random() - 0.5) * (width * 0.70);
          wy = -(height * 0.24 + Math.random() * (height * 0.28));
          break;
        case 7: // Lower Footer Buffer
        default:
          wx = (Math.random() - 0.5) * (width * 0.70);
          wy = height * 0.24 + Math.random() * (height * 0.28);
          break;
      }

      return { worldX: wx, worldY: wy };
    };

    const sprites: PerspectiveSprite[] = [];

    // Distribute sprites across virtual depth with varied speeds for 3-5s journey
    for (let i = 0; i < TOTAL_SPRITES; i++) {
      const pos = createPerimeterPosition();
      const zProgress = i / TOTAL_SPRITES;
      const z = Z_NEAR + zProgress * (Z_FAR - Z_NEAR) + (Math.random() - 0.5) * 80;

      // Speed calibrated for fast, energetic forward journey (approx 3.2 - 4.8 seconds total)
      const speed = 9.5 + Math.random() * 5.5;

      sprites.push({
        img: getRandomImage(),
        worldX: pos.worldX,
        worldY: pos.worldY,
        z,
        baseSize: 180 + Math.random() * 100,
        speed,
        rotation: (Math.random() - 0.5) * 0.32,
        vRot: (Math.random() - 0.5) * 0.0004,
        baseOpacity: 0.85 + Math.random() * 0.15
      });
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', resize);
    resize();

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Viewport Intersection Observer (pause loop when hero is offscreen)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inView = entry.isIntersecting;
          if (inView && !animId && !prefersReducedMotion) {
            lastTime = performance.now();
            animId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
      } else {
        isRunning = true;
        lastTime = performance.now();
        if (inView && !animId && !prefersReducedMotion) {
          animId = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isRunning || !inView) {
        animId = 0;
        return;
      }

      const delta = Math.min(time - lastTime, 40);
      lastTime = time;
      const dt = delta / 16.666;

      const centerX = width / 2;
      const centerY = height / 2;

      // Define central protected headline zone
      // Horizontally: centered 58% of viewport
      // Vertically: roughly 34% to 64% of hero
      const protLeft = width * 0.21;
      const protRight = width * 0.79;
      const protTop = height * 0.34;
      const protBottom = height * 0.64;

      ctx.clearRect(0, 0, width, height);

      // Sort sprites by Z descending: farthest drawn first, nearest drawn in front
      sprites.sort((a, b) => b.z - a.z);

      for (let i = 0; i < sprites.length; i++) {
        const s = sprites[i];

        // Autonomous forward depth travel: decrease Z continuously over delta time
        if (!prefersReducedMotion) {
          s.z -= s.speed * dt;
          s.rotation += s.vRot * dt;
        }

        // Perspective scale: scale = focalLength / (focalLength + z)
        const depthDivider = FOCAL_LENGTH + s.z;
        if (depthDivider <= 20) {
          // Passed camera plane: recycle behind the far plane
          s.z = Z_FAR + Math.random() * 200;
          const newPos = createPerimeterPosition();
          s.worldX = newPos.worldX;
          s.worldY = newPos.worldY;
          s.img = getRandomImage();
          s.rotation = (Math.random() - 0.5) * 0.32;
          continue;
        }

        const scale = FOCAL_LENGTH / depthDivider;
        const screenX = centerX + s.worldX * scale;
        const screenY = centerY + s.worldY * scale;

        const naturalW = s.img.naturalWidth || 400;
        const naturalH = s.img.naturalHeight || 300;
        const aspect = naturalW / naturalH;

        const drawW = s.baseSize * scale;
        const drawH = drawW / aspect;

        // Check if fully outside viewport when near/foreground
        const isOffscreen =
          screenX + drawW / 2 < -60 ||
          screenX - drawW / 2 > width + 60 ||
          screenY + drawH / 2 < -60 ||
          screenY - drawH / 2 > height + 60;

        if (s.z <= Z_NEAR || (isOffscreen && s.z < 500)) {
          // Recycle smoothly behind far plane without sudden teleportation
          s.z = Z_FAR + Math.random() * 250;
          const newPos = createPerimeterPosition();
          s.worldX = newPos.worldX;
          s.worldY = newPos.worldY;
          s.img = getRandomImage();
          s.rotation = (Math.random() - 0.5) * 0.32;
          continue;
        }

        // Protected Central Zone Evaluation:
        // Medium and foreground sprites must NEVER substantially intersect the protected zone.
        const isNearOrMid = s.z < 1200;
        const intersectsProtectedZone =
          screenX + drawW * 0.35 > protLeft &&
          screenX - drawW * 0.35 < protRight &&
          screenY + drawH * 0.35 > protTop &&
          screenY - drawH * 0.35 < protBottom;

        if (isNearOrMid && intersectsProtectedZone) {
          // Regenerate trajectory to push outward to perimeter
          const newPos = createPerimeterPosition();
          s.worldX = newPos.worldX;
          s.worldY = newPos.worldY;
          continue;
        }

        // Depth Appearance & Opacity Calibration:
        // - Far depth (z > 1500): small, pale, softly transparent (0.05 - 0.25)
        // - Middle depth (1500 >= z > 500): clearly visible, secondary (0.35 - 0.70)
        // - Near depth (z <= 500): large, sharp, mostly opaque (0.85 - 1.0), accelerating outward
        let alpha = s.baseOpacity;
        if (s.z > 1500) {
          // Smooth fade in from distant horizon
          const t = Math.max(0, (Z_FAR - s.z) / (Z_FAR - 1500));
          alpha = 0.05 + t * 0.25;
        } else if (s.z > 500) {
          const t = (1500 - s.z) / 1000;
          alpha = 0.35 + t * 0.40;
        } else {
          // Near foreground: full opacity
          alpha = s.baseOpacity;
          // Soft fade only at extreme camera exit
          if (s.z < -80) {
            alpha *= Math.max(0, (s.z - Z_NEAR) / (-80 - Z_NEAR));
          }
        }

        // Sprites crossing behind text area must remain very faint (no higher than 0.08 - 0.12)
        if (intersectsProtectedZone) {
          alpha = Math.min(alpha, 0.09);
        }

        if (alpha <= 0.01) continue;

        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, alpha));
        ctx.translate(screenX, screenY);
        ctx.rotate(s.rotation);

        if (s.img.complete && s.img.naturalWidth > 0) {
          ctx.drawImage(s.img, -drawW / 2, -drawH / 2, drawW, drawH);
        }

        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    // Initial render
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      data-component="intro"
      className="relative w-full h-screen overflow-hidden bg-[#F2EFEA] flex flex-col justify-between items-center select-none"
    >
      {/* 3D Perspective Canvas Field (Fully Autonomous, No Pointer Interaction) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Top Spacer for Fixed Nav */}
      <div className="pt-24 w-full" />

      {/* Central Headline: Preserved, Stable, Visually Dominant & Readability-Protected */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto my-auto pointer-events-none">
        <h1 className="editorial-display text-[34px] sm:text-[44px] md:text-[50px] lg:text-[56px] leading-[1.06] text-[#241F21] tracking-tight drop-shadow-xs">
          Spaces for people, <br />
          made for life.
        </h1>
      </div>

      {/* Bottom Cues */}
      <div className="relative z-10 w-full max-w-[1536px] px-6 sm:px-12 pb-10 flex items-center justify-between text-xs font-mono text-[#524945] pointer-events-none">
        <span className="uppercase tracking-widest text-[#988F8B]">
          Made to Last
        </span>
        <div className="flex items-center gap-1.5 animate-bob">
          <span>Scroll to Explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};
