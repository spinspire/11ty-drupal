---
pagination:
    data: articles
    size: 1
    alias: node
permalink: "{{ node.alias }}/"
---

Submitted by *{{ author.display_name }}* on *{{ node.changed }}*

<img src={{ image.url }} alt={{ image.alt }} class="img-fluid">

<div>{{ node.body | safe }}</div>

---

<a href={{ site.parent + node.alias }} class="btn btn-primary" target="_blank" data-no-swup>View on Drupal</a>
<a href={{ site.parent + '/node/' + node.nid + '/edit' }} class="btn btn-primary" target="_blank" data-no-swup>Edit on Drupal</a>
