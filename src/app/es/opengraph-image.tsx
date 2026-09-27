import { SITE_NAME } from "@/content";
import { ogSize, renderOgImage } from "@/lib/og-image";

export const alt = `${SITE_NAME}, ingeniero de software`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("es");
}
