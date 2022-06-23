---
layout: post
title:  "Too Many Projects"
date:   2022-06-23 12:52:11 -0400
categories:
  - Projects
---

I believe that having personal projects is extremely important and use them as a way to satisfy my curiosity in a subject without needing to completely dedicate all my energy and time to that curiosity. I have tons of side projects, 99% will never see the light of day. For instance, several years ago I started building an electric go-kart. It's still in the basement in pieces. Primarily because I don't know how to weld and I need a bracket built to support the motor. I know at some point I will either throw out the project or actually go have someone weld it together, but for today that's not on the books. 

While I was in quarantine with COVID in the last week, I built a Slack bot named Jarvis. Jarvis is able to turn on and off the lights in our house by parsing messages in a Slack channel. It was a fun diversion, that took about six hours of coding. I'll probably continue to extend Jarvis over time, when I feel the urge to work on him. 

There are piles of other projects:

- Tapes - A massive live music library organizer, media manager, and player. The goal is to be able to support a 100TB music library with a Raspberry Pi, so the program has to be highly efficient.
- Mobile Air Qualtiy Sensor - this is planned to be used as an indoor air quality consultant, to help folks identify what areas of their house need the most improvement for air quality.
- Indoor Air Quality SaaS Platform - a backend and frontend to collect and parse data from all of the indoor air quality sensors I deploy
- Indoor Air Quality sensors - I'm building a few models of IAQ sensors: Indoor (wifi), Indoor (inwall, PoE), Outdoor/Commercial (PoE)
- NUC Based NAS - I picked up a cheap M.2 to SATA adapter and want to build a NUC based NAS for a replication target for backups and important data from my primary NAS
- QNAP with NixOS - Install NixOS on my QNAP and rebuild
- Corne DIY Keyboard - I've started to collect the parts for a Corne DIY keyboard

What's nice about having so many projects is it gives you lots to choose from when you're bored. Often though, it feels overwhelming, like I'll never ship anything. So, my plan is to ship something in the next 30 days. Most likely I'll be focusing on the IAQ SaaS Platform and the indoor (wifi) sensor, since I need to start collecting data as soon as possible. The MVP for this project is being able to collect data from about ten sensors. No worrying about automation, deployment, or anything else, just being able to collect data into InfluxDB and then tie that into Grafana. This should be minimal code, except for what will run on the sensors themselves.

Now, get started Wes.