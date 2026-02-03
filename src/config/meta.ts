import raw from "@/meta/meta.json";

export interface OgMeta {
  site_name: string;
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

function validateOgMeta(data: any): OgMeta {
  if (
    typeof data?.site_name === "string" &&
    typeof data?.title === "string" &&
    typeof data?.description === "string" &&
    typeof data?.image === "string" &&
    (data.type === undefined ||
      data.type === "website" ||
      data.type === "article") &&
    (data.twitter === undefined ||
      (typeof data.twitter.card === "string" &&
        typeof data.twitter.image === "string"))
  ) {
    return data;
  }

  throw new Error("Invalid ogmeta.json");
}

export const ogMeta = validateOgMeta(raw);
