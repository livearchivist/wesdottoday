---
layout: page
title: Referrals
---

The following links are to products, services, or people that I would recommend to provide their respective services in a very reliable fashion. Some of the links might be affiliate links, providing me with a small payment if you choose to use their services, but most are just services I trust. For those that are affiliate links, I've noted below with an asterisk next to their name.

{% for ref in site.refs %}
  <h2><a href="{{ ref.url }}">{{ ref.name }}{% if ref.affiliate == true %}*{% endif %}</a></h2>
  <p>{{ ref.description | markdownify }}</p>
{% endfor %}