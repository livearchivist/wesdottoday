---
layout: page
name: Referrals
---

{% for ref in site.refs %}
  <h2><a href="{{ ref.url }}">{{ ref.name }}</a></h2>
  <p>{{ ref.description | markdownify }}</p>
{% endfor %}