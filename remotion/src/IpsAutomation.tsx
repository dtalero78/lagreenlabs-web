import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import {
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  NotePencil,
  CalendarCheck,
  Wallet,
  ChatCenteredDots,
  ChartBar,
  Check,
  type Icon,
} from "@phosphor-icons/react";

export const WIDTH = 1600;
export const HEIGHT = 900;
export const FPS = 30;
export const DURATION_IN_FRAMES = 240; // 8s, loop perfecto

const { fontFamily: anton } = loadAnton("normal", {
  weights: ["400"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});
const { fontFamily: inter } = loadInter("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
  ignoreTooManyRequestsWarning: true,
});

// Paleta (combina con la marca verde de LagreenLabs)
const FOREST = "#0a3326";
const FOREST_DEEP = "#072318";
const LIME = "#c4ec86";
const MINT = "#8fe0b4";
const WHITE = "#ffffff";

type Point = { x: number; y: number };

// Punto sobre una curva cúbica de Bézier en t (0..1)
const cubicAt = (
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  t: number,
): Point => {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  return {
    x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
    y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
  };
};

const pathD = (p0: Point, p1: Point, p2: Point, p3: Point) =>
  `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;

const HUB: Point = { x: 800, y: 470 };

type Node = { label: string; icon: Icon; y: number };

const INPUTS: Node[] = [
  { label: "WhatsApp", icon: WhatsappLogo, y: 250 },
  { label: "Llamadas", icon: Phone, y: 400 },
  { label: "Correo", icon: EnvelopeSimple, y: 550 },
  { label: "Formularios", icon: NotePencil, y: 700 },
];

const OUTPUTS: Node[] = [
  { label: "Agendamiento", icon: CalendarCheck, y: 250 },
  { label: "Cobranza", icon: Wallet, y: 400 },
  { label: "PQRS", icon: ChatCenteredDots, y: 550 },
  { label: "Reportes", icon: ChartBar, y: 700 },
];

// Curvas de cada conexión
const inputCurve = (n: Node) => ({
  p0: { x: 330, y: n.y },
  p1: { x: 540, y: n.y },
  p2: { x: 590, y: HUB.y },
  p3: { x: HUB.x - 96, y: HUB.y },
});

const outputCurve = (n: Node) => ({
  p0: { x: HUB.x + 96, y: HUB.y },
  p1: { x: 1010, y: HUB.y },
  p2: { x: 1060, y: n.y },
  p3: { x: 1270, y: n.y },
});

const DOTS_PER_PATH = 3;
const DOT_PERIOD = 60; // divide 240 → loop perfecto

// Bloom de marca (4 pétalos)
const Bloom: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={color}>
    <circle cx="50" cy="26" r="24" />
    <circle cx="50" cy="74" r="24" />
    <circle cx="26" cy="50" r="24" />
    <circle cx="74" cy="50" r="24" />
    <circle cx="50" cy="50" r="15" opacity={0.9} />
  </svg>
);

const FlowDots: React.FC<{
  curve: { p0: Point; p1: Point; p2: Point; p3: Point };
  frame: number;
  phase: number;
}> = ({ curve, frame, phase }) => {
  const dots = [];
  for (let k = 0; k < DOTS_PER_PATH; k++) {
    const t = ((frame / DOT_PERIOD + phase + k / DOTS_PER_PATH) % 1 + 1) % 1;
    const p = cubicAt(curve.p0, curve.p1, curve.p2, curve.p3, t);
    const opacity = interpolate(t, [0, 0.1, 0.85, 1], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    dots.push(
      <div
        key={k}
        style={{
          position: "absolute",
          left: p.x - 5,
          top: p.y - 5,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: LIME,
          opacity,
          boxShadow: `0 0 12px 2px ${LIME}`,
        }}
      />,
    );
  }
  return <>{dots}</>;
};

const Chip: React.FC<{ node: Node; align: "left" | "right"; frame: number; phase: number }> = ({
  node,
  align,
  frame,
  phase,
}) => {
  const IconCmp = node.icon;
  // respiración sutil del ícono
  const glow = 0.5 + 0.5 * Math.sin((frame / DURATION_IN_FRAMES) * Math.PI * 2 * 4 + phase * 6);
  return (
    <div
      style={{
        position: "absolute",
        top: node.y - 32,
        [align === "left" ? "left" : "right"]: 96,
        width: 234,
        height: 64,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 18px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.12)",
        flexDirection: align === "left" ? "row" : "row-reverse",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          background: "rgba(196,236,134,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 ${6 + glow * 10}px rgba(196,236,134,${0.15 + glow * 0.25})`,
          flexShrink: 0,
        }}
      >
        <IconCmp size={22} weight="bold" color={LIME} />
      </div>
      <span
        style={{
          fontFamily: inter,
          fontSize: 21,
          fontWeight: 500,
          color: "rgba(255,255,255,0.92)",
        }}
      >
        {node.label}
      </span>
    </div>
  );
};

const OutputCard: React.FC<{ node: Node; frame: number; index: number }> = ({
  node,
  frame,
  index,
}) => {
  const IconCmp = node.icon;
  const phase = index * 15;
  const cyclePos = ((frame - phase) % DOT_PERIOD + DOT_PERIOD) % DOT_PERIOD;
  const flash = interpolate(cyclePos, [0, 4, 22], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plusOpacity = interpolate(cyclePos, [0, 6, 30, 42], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const plusY = interpolate(cyclePos, [0, 42], [0, -36], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: node.y - 36,
        right: 96,
        width: 234,
        height: 72,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 18px",
        borderRadius: 16,
        background: `rgba(196,236,134,${0.06 + flash * 0.12})`,
        border: `1px solid rgba(196,236,134,${0.22 + flash * 0.5})`,
        boxShadow: `0 0 ${flash * 26}px rgba(196,236,134,${flash * 0.4})`,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: "rgba(196,236,134,0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <IconCmp size={23} weight="bold" color={LIME} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <span
          style={{
            fontFamily: inter,
            fontSize: 19,
            fontWeight: 600,
            color: WHITE,
            lineHeight: 1.1,
          }}
        >
          {node.label}
        </span>
        <span
          style={{
            fontFamily: inter,
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          organizado
        </span>
      </div>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: LIME,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          opacity: 0.5 + flash * 0.5,
        }}
      >
        <Check size={15} weight="bold" color={FOREST} />
      </div>
      <span
        style={{
          position: "absolute",
          top: 2 + plusY,
          right: 16,
          fontFamily: inter,
          fontSize: 18,
          fontWeight: 700,
          color: LIME,
          opacity: plusOpacity,
        }}
      >
        +1
      </span>
    </div>
  );
};

const ColumnLabel: React.FC<{ text: string; side: "left" | "right" }> = ({
  text,
  side,
}) => (
  <span
    style={{
      position: "absolute",
      top: 150,
      [side]: 110,
      fontFamily: inter,
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 3,
      color: LIME,
      opacity: 0.85,
    }}
  >
    {text}
  </span>
);

export const IpsAutomation: React.FC = () => {
  const frame = useCurrentFrame();
  useVideoConfig();

  const rotation = (frame / DURATION_IN_FRAMES) * 360;
  const hubPulse = 1 + 0.05 * Math.sin((frame / DURATION_IN_FRAMES) * Math.PI * 2 * 4);
  const glowOsc = 0.5 + 0.5 * Math.sin((frame / DURATION_IN_FRAMES) * Math.PI * 2 * 2);
  const dash = -((frame * 1.2) % 16);
  const statusBlink = 0.55 + 0.45 * Math.sin((frame / DURATION_IN_FRAMES) * Math.PI * 2 * 4);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 90% at 50% 35%, ${FOREST} 0%, ${FOREST_DEEP} 100%)`,
      }}
    >
      {/* Resplandor central que late */}
      <div
        style={{
          position: "absolute",
          left: HUB.x - 360,
          top: HUB.y - 360,
          width: 720,
          height: 720,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(196,236,134,${0.12 + glowOsc * 0.08}) 0%, rgba(196,236,134,0) 60%)`,
        }}
      />

      {/* Líneas de conexión */}
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{ position: "absolute", inset: 0 }}
      >
        {INPUTS.map((n, i) => {
          const c = inputCurve(n);
          return (
            <path
              key={`il-${i}`}
              d={pathD(c.p0, c.p1, c.p2, c.p3)}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1.5}
              strokeDasharray="6 10"
              strokeDashoffset={dash}
            />
          );
        })}
        {OUTPUTS.map((n, i) => {
          const c = outputCurve(n);
          return (
            <path
              key={`ol-${i}`}
              d={pathD(c.p0, c.p1, c.p2, c.p3)}
              fill="none"
              stroke="rgba(196,236,134,0.18)"
              strokeWidth={1.5}
              strokeDasharray="6 10"
              strokeDashoffset={dash}
            />
          );
        })}
      </svg>

      {/* Dots fluyendo */}
      {INPUTS.map((n, i) => (
        <FlowDots key={`id-${i}`} curve={inputCurve(n)} frame={frame} phase={i * 0.12} />
      ))}
      {OUTPUTS.map((n, i) => (
        <FlowDots
          key={`od-${i}`}
          curve={outputCurve(n)}
          frame={frame}
          phase={0.5 + i * 0.12}
        />
      ))}

      {/* Hub central: motor de IA */}
      <div
        style={{
          position: "absolute",
          left: HUB.x - 90,
          top: HUB.y - 90,
          width: 180,
          height: 180,
          transform: `scale(${hubPulse})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(196,236,134,0.35)",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <Bloom size={120} color={LIME} />
        </div>
      </div>
      <span
        style={{
          position: "absolute",
          left: HUB.x - 120,
          top: HUB.y + 104,
          width: 240,
          textAlign: "center",
          fontFamily: inter,
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: 1,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        Motor de IA
      </span>

      {/* Columnas */}
      {INPUTS.map((n, i) => (
        <Chip key={`ic-${i}`} node={n} align="left" frame={frame} phase={i * 0.5} />
      ))}
      {OUTPUTS.map((n, i) => (
        <OutputCard key={`oc-${i}`} node={n} frame={frame} index={i} />
      ))}

      <ColumnLabel text="ENTRA" side="left" />
      <ColumnLabel text="SALE ORDENADO" side="right" />

      {/* Título */}
      <div style={{ position: "absolute", left: 96, top: 72 }}>
        <div
          style={{
            fontFamily: inter,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 3,
            color: LIME,
            marginBottom: 8,
          }}
        >
          LAGREENLABS · AUTOMATIZACIÓN PARA IPS
        </div>
        <div
          style={{
            fontFamily: anton,
            fontSize: 46,
            color: WHITE,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: 0.5,
          }}
        >
          El flujo de tu operación, ordenado
        </div>
      </div>

      {/* Estado */}
      <div
        style={{
          position: "absolute",
          left: 96,
          bottom: 64,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 11,
            height: 11,
            borderRadius: "50%",
            background: MINT,
            opacity: statusBlink,
            boxShadow: `0 0 10px ${MINT}`,
          }}
        />
        <span
          style={{
            fontFamily: inter,
            fontSize: 17,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          En operación · solicitudes conectadas en un solo flujo
        </span>
      </div>
    </AbsoluteFill>
  );
};
