const fetch = require("node-fetch");
const site = require("./site");
const fs = require("fs");

/*
 * Fetches nodes of type 'article' from the Drupal backend
 * using JSON:API.
 */
async function getData() {
  let articles = [];
  // JSON API endpoint
  let url = `${site.parent}/jsonapi/node/article`;
  do {
    const response = await fetch(url);
    const json = await response.json();
    // transform the paginated data
    const nodes = json.data.map(node => ({
      title: node.attributes.title,
      nid: node.attributes.drupal_internal__nid,
      alias: node.attributes?.path?.alias ?? `/node/${node.attributes.drupal_internal__nid}`,
      body: node.attributes?.body?.processed,
      field_image: {
        id: node.relationships?.field_image?.data?.id,
        alt: node.relationships?.field_image?.data?.meta?.alt,
      },
      uid: {
        id: node.relationships?.uid?.data?.id,
      },
      changed: node.attributes.changed,
    }));
    // un-paginate
    articles.push(...nodes);
    url = json.links?.next?.href;
  } while (url);
  // sort all by date
  articles = articles.sort(
    ({ changed: a }, { changed: b }) => a === b ? 0 : (a < b ? 1 : -1)
  );
  return articles;
}

async function persistInFile(file, func) {
  if (fs.existsSync(file)) {
    console.log(`Reading cache file: ${file}`);
    return JSON.parse(fs.readFileSync(file));
  }
  const result = await func();
  console.log(`Writing cache file: ${file}`);
  fs.writeFileSync(file, JSON.stringify(result));
  return result;
}

module.exports = getData;
// use below if you want to use cache file and not hit the API repeatedly.
// module.exports = () => persistInFile("/tmp/articles.json", getData);
