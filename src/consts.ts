// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "SOTA's Seminar";
export const SITE_TITLE = "SOTA's Seminar";
export const SITE_DESCRIPTION = "SOTA's Seminar";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "SOTA's Seminar - All Tags";
export const Tags_DESCRIPTION =
  "SOTA's Seminar - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in SOTA's Seminar`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in SOTA's Seminar`,
    description: `Browse all articles under the ${category} category in SOTA's Seminar`,
  };
}

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://space.bilibili.com/3546880176818722",
    icon: "tabler:brand-bilibili",
    label: "Bilibili",
  },
];

export const headerLinks = [
  {
    href: "https://github.com/WayneJin0918",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
]

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
