import rss, {pagesGlobToRssItems} from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "MiguelPimentel.do - Notes",
    description: "Simple notes.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./notes/**/*.{md,mdx}")),
    // stylesheet: './rss.xsl',
    customData: `<language>en-us</language>`,
  })
}
