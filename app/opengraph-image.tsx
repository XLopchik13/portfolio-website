import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: "#9b9a97",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        {SITE_CONFIG.title}
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#37352f",
          lineHeight: 1.1,
          marginBottom: 32,
        }}
      >
        {SITE_CONFIG.name}
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#9b9a97",
          maxWidth: 700,
          lineHeight: 1.5,
        }}
      >
        {SITE_CONFIG.description}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          width: 48,
          height: 4,
          backgroundColor: "#2383e2",
        }}
      />
    </div>,
    size,
  );
}
