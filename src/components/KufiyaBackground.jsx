export default function KufiyaBackground() {
  return (
    <div
      className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            rgba(184,87,87,0.35) 0px,
            rgba(184,87,87,0.35) 2px,
            transparent 2px,
            transparent 8px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(79,162,125,0.35) 0px,
            rgba(79,162,125,0.35) 2px,
            transparent 2px,
            transparent 8px
          )
        `,
        backgroundSize: "90px 90px",
        animation: "kufiyaWave 9s linear infinite",
      }}
    />
  );
}
