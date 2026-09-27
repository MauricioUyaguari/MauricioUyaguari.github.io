import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME, getContent, type Locale } from "@/content";
import { SITE_URL } from "@/site";

export const ogSize = { width: 1200, height: 630 };

/** The 1200×630 card shown when the site is shared on LinkedIn, WhatsApp, etc. */
export async function renderOgImage(locale: Locale) {
  const t = getContent(locale);
  const photo = await readFile(join(process.cwd(), "src/assets/og-photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const host = new URL(SITE_URL).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          color: "#1c1917",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", padding: "0 80px", gap: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
              {SITE_NAME}
            </div>
            <div style={{ fontSize: 32, color: "#6b6560", marginTop: 16 }}>
              {`${t.role} · ${t.location}`}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
              {t.now.tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 26,
                    padding: "8px 20px",
                    borderRadius: 999,
                    background: "#f5f3ef",
                    color: "#6b6560",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={300}
            height={300}
            alt=""
            style={{ borderRadius: 999, border: "10px solid #ffd100", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px 28px",
            fontSize: 26,
            color: "#6b6560",
          }}
        >
          <div>{host}</div>
          <div>Jima, Ecuador</div>
        </div>
        {/* Ecuador's colors along the bottom edge */}
        <div style={{ display: "flex", height: 18 }}>
          <div style={{ flex: 2, background: "#ffd100" }} />
          <div style={{ flex: 1, background: "#034ea2" }} />
          <div style={{ flex: 1, background: "#c8102e" }} />
        </div>
      </div>
    ),
    ogSize,
  );
}
