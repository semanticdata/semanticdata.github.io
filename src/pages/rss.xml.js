import rss, {pagesGlobToRssItems} from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "MiguelPimentel.do - Blog",
    description: "Simple blog.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.{md,mdx}")),
    // stylesheet: './rss.xsl',
    customData: `<language>en-us</language>`,
  })
}
