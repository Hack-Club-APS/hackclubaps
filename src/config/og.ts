export interface OgMeta {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: "website" | "article";
  twitter?: {
    card: "summary" | "summary_large_image";
    image: string;
  };
}

export const og: OgMeta = {
  title: "Hack Club APS",
  description: "A student-led space for building, coding, and shipping cool projects at APS.",
  url: "https://hackclubaps.vercel.app/",
  image: "https://hackclubaps.vercel.app/og-image.png",
  type: "website",
  twitter: {
    card: "summary_large_image",
    image: "https://hackclubaps.vercel.app/og-image.png"
  }
};
