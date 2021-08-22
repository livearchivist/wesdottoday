---
layout: page
name: Referrals
---

{% for ref in site.refs %}
  <h2>{{ ref.name }}</h2>
  <p>{{ ref.description | markdownify }}</p>
{% endfor %}