import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const learn = (await getCollection("learn")).filter(
    (post) => !post.data.draft,
  );

  const code = (await getCollection("code")).filter(
    (project) => !project.data.draft,
  );

  const xp = (await getCollection("xp")).filter(
    (entry) => !entry.data.draft,
  );

  const items = [...learn, ...code, ...xp].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
