---
layout: post
category: Life
title: "Moving Countries - A Thought Exercise"
published: true
---

A few days ago I wrote _[looming change](/looming-change/)_ where I described how my wife and I have this feeling that we might eventually move countries - most likely Europe. This got my brain thinking about how much home infrastructure we have and how I would need to shrink it down in order to make it fit in the _most likely_ smaller living space. Then my brain moved to just getting some of this stuff over there. 

> This is a thought exercise, we are not currently planning on moving

### Physical Footprint

First up, was shrinking down the equipment into something that is much more space efficient yet still provide the horsepower we need. A side benefit is a reduction in noise and power. 

A Supermicro 2U server and Netapp 4U disk enclosure becomes an Intel NUC Pro Xeon and Qnap 8-Bay NAS.

From a performance perspective, the Supermicro box is quite old and aside from memory, has less power than the NUC that sits on my desk. So I need to start working on transitioning any services that run on anything else over to this box. Below is a list of services that run in our house:

* CoreDNS
* Caddy
* Plex
* Sonarr
* Radarr
* Lidarr
* NZBGet
* Transmission
* Syncthing
* Home Assistant
* Neutrinos (2 - Random Data Generators)
* Wireguard
* Telegraf
* InfluxDB
* Grafana
* UPS Monitoring

We have quite a bit of storage, which is currently configured as RAIDZ-2 7x8TB HDDs and RAIDZ-2 5x14TB HDDs. Our currently storage needs lie somewhere around 40TB. For this move, I would buy 3 additional 14TB HDDs and put all of them in a Qnap 8-Bay NAS, running RAID-6, which should give us a little North of 75TB of storage.

I will purchase a new UPS once we get there, most likely a Li-Ion based one.

### Shipping

My goal if we move is to go with very minimal personal stuff, hopefully only requiring a large suitcase and a side bag. Working from home means I don't require a ton of clothing and I'm not very attached to my physical belongings. With that said, it would make the most sense to purchase and ship all of this equipment rather than procure in Europe since I would need to migrate the data over before we leave. 

I lean more towards overkill when shipping electronics, so my shipping plans would look something like this:

#### NAS

Perform a final backup to BorgBase, where I calculate our actual important data backup to cost less than $100 per month. TV, Movies, etc can be re-downloaded if necessary. Then remove disks and label them with the order in which they were in the NAS (bays 1-8).

Pack the NAS in a Pelican case, leaving 1" of foam around all sides, and 2" between it and the NUC.

#### Disks

There will be 8x14TB Hard Drives that need to be packed and shipped, alongside 4 external SSDs containing backups of my computers. My wife's MacBook is backed up to our NAS and directly to BorgBase, while my computers are backed up to (2) different SSDs and BorgBase. I intend to leave one set of SSDs behind with a friend to ship a month after we arrive (just in case there are any weird shipping issues). Those two SSDs will be in a small Pelican Case which is then packed in a box.

The remaining SSDs and Hard Drives from the NAS will be packed in a ProStorage 16 insert in a Pelican 1510.

#### NUC

Perform a final backup to BorgBase, which will include all of our config and database files for all applications. Pack the NAS in the Pelican case next to the NAS, leaving 1" of foam around all sides, and 2" between it and the NAS.

### Personal and Work Computers

I have a few machines that I'll be moving with us: Lenovo Laptop (main), MacBook Air (work), a CyberDeck, and a Lisperati. The CyberDeck and Lisperati are currently in the design and hardware procurement phase, but should be in existence by the time we leave - since we haven't even begun planning or decided if we are leaving.

The CyberDeck and Lisperati will be backed up, wiped, and packed away in the NAS Pelican Case if there's room (still mapping it out), or in a case of their own. I have a bunch of Pelican cases from various projects, so they're a natural choice for this move since they'll protect just about anything you put in them. 

My Lenovo Laptop will be on my person in my Filson Field Bag. It will also be backed up and wiped, before we hop on the plane. The only device that will retain any state while we're crossing borders is my phone, which will be logged out of any major cloud storage services to limit exposure on the device itself to customs.

My work MacBook Air will be wiped as well and will also be on my person in my Filson Field Bag. I will create a Time Machine backup of the machine and place it in the case with the rest of the hard drives. Most of my important data is held in Druva InSync anyways, so there should be no issues here.

### Fin

Moving countries seems like it'll be an interesting technical challenge. It makes you think long and hard about the devices and the stuff you have, why you have them, and should you keep them. I ensure you I'll be working on this over the next several months, trying to get to a point where it'll be no big deal for me to load my gear up and hop on a plane.

This means getting my hardware slimmed down, data properly backed up (always an issue), backups tested!!!, and many other things.