---
title: 11ty + Drupal Demo
---

<div class="d-flex logos">
  <img src={{ '/assets/11ty.png' | url}} alt="Eleventy Logo" class="eleventy">
  <div class="heart">❤️</div>
  <img src={{ '/assets/drupal.png' | url}} alt="Drupal Logo" class="drupal">
</div>

This is a demo project showing how to generate a static site using 11ty from Drupal content. The basic idea is to manage your content in Drupal, fetch the list of nodes from Drupal using JSON:API module, and then generate a static page for each of the nodes using 11ty.

Features demonstrated:

- Fetch dynamic data (list of articles from Drupal)
- Paginate over all the array of articles (20 articles per page)
- Template the article page with its own `page-article.md`
- Further fetch the author info and image details while rendering each article page
- Do page transitions using [swup](https://swup.js.org/)

---

<a href={{ '/articles' | url }} class="btn btn-primary">Articles</a>
