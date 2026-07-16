import { useEffect, useRef } from "react";

/**
 * A full-page fixed canvas that renders a gentle animated particle
 * network behind all page content. Uses the site's primary green
 * palette so it works on the light cream background.
 */
interface PageBackgroundProps {
    count?: number;
    color?: string;
    opacity?: number;
}

const PageBackground = ({
    count = 120,
    color = "22,101,52",
    opacity = 0.28,
}: PageBackgroundProps) => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current!;
        const ctx = canvas.getContext("2d")!;
        let animId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        interface P {
            x: number; y: number;
            vx: number; vy: number;
            r: number; a: number;
            pulse: number; pulseSpeed: number;
            isWhite: boolean;
        }

        const particles: P[] = Array.from({ length: count }, () => {
            const isWhite = Math.random() > 0.7; // mix of green and white dots
            return {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                r: Math.random() * 2.8 + 0.8,
                a: Math.random() * opacity + opacity * 0.4,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.008 + Math.random() * 0.015,
                isWhite,
            };
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);

                        const p1 = particles[i];
                        const p2 = particles[j];
                        const lineOpacity = (opacity * 0.5) * (1 - dist / 140);

                        // If both points are white, drawing a light line (better for dark bg)
                        if (p1.isWhite && p2.isWhite) {
                            ctx.strokeStyle = `rgba(255,255,255,${lineOpacity * 0.75})`;
                        } else {
                            ctx.strokeStyle = `rgba(${color},${lineOpacity})`;
                        }

                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                p.pulse += p.pulseSpeed;

                const currentAlpha = p.a * (0.6 + 0.4 * Math.sin(p.pulse));
                const finalColor = p.isWhite ? `255,255,255` : color;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${finalColor},${currentAlpha})`;
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, [count, color, opacity]);

    return (
        <canvas
            ref={ref}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
                background: "transparent"
            }}
        />
    );
};

export default PageBackground;
