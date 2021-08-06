# 11ty + Drupal Demo Project

This is a demo project showing how to generate a static site using [11ty](https://11ty.dev/docs) from [Drupal](https://drupal.org) content. The basic idea is to manage your content in Drupal, fetch the list of nodes from Drupal using JSON:API module, and then generate a static page for each of the nodes using 11ty.

------ **[See the demo screencast video on YouTube](https://youtu.be/22NDadLKfzE)** ------

Features demonstrated:

- Fetch dynamic data (list of articles from Drupal)
- Paginate over all the array of articles (20 articles per page)
- Template the article page with its own `page-article.md`
- Further fetch the author info and image details while rendering each article page
- Do page transitions using [swup](https://swup.js.org/)

## Setup

- Find/build/use a Drupal site with a few articles
- Install and enable `jsonapi` module on this Drupal site
- Edit `src/_data/site.js` and point `parent` field to the above Drupal site
- Make sure you have NodeJS 14 or newer

```
npm install # although we recommend "pnpm" instead
npm run dev
```

## Important Files

- `.eleventy.js` - 11ty configuration
- `src/_data` - where global data is
- `src/_includes/default.njk` - default layout for all pages
- `src/assets/global.css` - global CSS style
- `src/index.md` - home page
- `src/articles.md` - paginated list of articles
- `src/page-article.md` - article detail page template
- `src/page-article.11tydata.js` - feches extra data for each article
