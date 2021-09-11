---
layout: page
title: Tapes
---

A massively scalable, live music management and enjoyment platform, focused on giving you the tools you need to manage your live music archive. 

This tool started as a passion project for me, [Wes Kennedy](https://wes.today), when I embarked on creating my own archive of the [Etree Live Music Archive](https://archive.org/details/etree). Among various reasons, I wanted to ensure that I had a massive collection of live music that I could listen to at any point.

Unfortunately, lots of tools break or become unusable when you scale them to tens of millions of files. Plex, was the first tool I tried, but the database buckled under the pressure and modifying the metadata in the Plex UI does nothing for the actual metadata associated with the file. Roon, well - it's not made for live music, and the search feature is 100% useless at the scale that I work. Insert $ALLOFTHEMEDIALIBRARIES here and none of them could really do what I needed them to, well. 

So, I'm going to build my own. I've spent almost a decade working in the storage industry, have dealt with distributed platforms for most of that time too, so I think I can probably figure this one out. 

I would love to be able to handle my huge library using a Digital Ocean Droplet using Rclone to mount my storage on GSuite. For now, I don't intend on storing 200TB+ locally, as I don't want to drop that kind of coin on hard drives.

### Requirements

* [ ] Handle 200TB+ of data
* [ ] Scale to 10's of Millions of files
* [ ] Search features must return results against 100TB library in <1 second
* [ ] Provide HA and DR capabilities for media and metadata
* [ ] Offer Web UI for media management
* [ ] Use `mpd` or something in that vein for streaming purposes
* [ ] Mobile Clients
* [ ] Automated health checks of media (check for bitrot)
* [ ] Library completion tool for users who have Tapes installed and want to share Taping friendly artists
* [ ] Live Show visualization feature, with all tracks dotted across spectrogram
* [ ] Gapless playback
* [ ] Rclone mounting of remote disks (GSuite, Box, etc), with Encryption
* [ ] REST API for extensibility