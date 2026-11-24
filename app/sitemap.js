import { site } from "@/content/site";
import { projects } from "@/content/projects";
export default function sitemap() {
  const pages = ["", "/projects", "/design", "/about", "/experience", "/contact", ...projects.map((p) => `/projects/${p.slug}`)];
  return pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
