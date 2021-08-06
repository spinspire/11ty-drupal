const fetch = require("node-fetch");
const site = require("./_data/site");

module.exports = {
  eleventyComputed: {
    title: data => data.node.title,
    async image(data) {
      const field_image = data.node.field_image;
      if (field_image) {
        const url = `${site.parent}/jsonapi/file/file/${field_image.id}`;
        const response = await fetch(url);
        const json = await response.json();
        return {
          url: site.parent + json?.data?.attributes?.uri?.url,
          alt: field_image.alt,
        };
      }
    },
    async author(data) {
      const uid = data.node.uid;
      if (uid.id) {
        const url = `${site.parent}/jsonapi/user/user/${uid.id}`;
        const response = await fetch(url);
        const json = await response.json();
        const attr = json?.data?.attributes;
        return {
          uid: attr.drupal_internal__uid,
          ...attr,
        };
      }
    },
  }
}
