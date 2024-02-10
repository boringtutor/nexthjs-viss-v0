export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "template",
  description: "Website Designed for storing and managing the files and ides",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/boring_tutor",
    github:
      "https://github.com/boringtutor/FileTracker/tree/main/frontEnd/filetracker",
    
  },
}
