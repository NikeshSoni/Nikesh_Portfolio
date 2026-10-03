import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { socials } from "@/data/socials";
import { assetExists } from "@/lib/assets";

const defaultTitle = `${siteConfig.name} | ${siteConfig.title}`;

function twitterHandle() {
  const x = socials.find((s) => s.platform === "twitter");
  const handle = x?.href.split("/").filter(Boolean).pop();
  return handle ? `@${handle}` : undefined;
}

interface MetaInput {
  /** Omit on the home page to use the default title. */
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({ title, description, path, image, type = "website", publishedTime }: MetaInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : defaultTitle;
  const ogImage = image ?? (assetExists(siteConfig.ogImage) ? siteConfig.ogImage : undefined);
  const images = ogImage ? [{ url: ogImage, alt: fullTitle }] : undefined;

  return {
    title: title ? title : { absolute: defaultTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      creator: twitterHandle(),
      images: images?.map((i) => i.url),
    },
  };
}
