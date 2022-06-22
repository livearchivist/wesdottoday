---
layout: page
title: Gear
permalink: /gear/
---

Just like most folks in the tech industry, I take pride in the tools of my trade. Below you'll find a deep dive into my various machines, their uses, and how they're configured.

### boomboxx

`boomboxx` is the workhorse of the house. It's a monster machine that allows me to do just about anything I need to. I use this machine primarily for work but sometimes use it for personal projects as well.

**Specs**

- Boxx Apexx T4 Everest
- AMD Threadripper PRO 3975WX 32-Cores @ 4.2GHz
- 512GB memory
- (6) Micron 1.92TB NVMe
- (2) NVIDIA A6000 GPUs
- NVIDIA BlueField-2 100G DPU

**Software**

[configuration]()

- Ubuntu 20.04 (I had to switch from NixOS to Ubuntu to have more solid support for development on NVIDIA BlueField-2 - my dayjob)

### maracapants

`maracapants` is my personal laptop that gets used for lots of random projects. It's most likely going to be replaced in the next year or so.

**Specs**

- Lenovo T480S
- 24GB Memory
- 1TB NVMe

**Software**

[configuration]()

- NixOS
- i3wm
- Amnesia-tic Encrypted ZFS Filesystem

### goofynewton

`goofynewton` is our family QNAP. It runs Plex, Sonarr, Radarr, NZBGet, all of our backups, etc. It's extremely important in our house. Critical data is backed up off-site using BorgBase.

**Specs**

- QNAP TS-873A
- 64GB Memory
- (2) 500GB NVMe
- (2) 2TB SSD (will be replaced with 2*14TB HDDs to expand storage)
- (6) 14TB Toshiba Enterprise HDD

**Software**

[configuration]()

Today it runs QNAP QTS, but will be migrated over to NixOS in the near future. It will follow my Amnesia-tic Encrypted ZFS Filesystem design with remote SSH unlock capabilities.

- NixOS
- Amnesia-tic Encrypted ZFS Filesystem

### wkennedy-mlt

This machine has a super-fun name, what can I say, it's managed by NVIDIA IT. 

**Specs**

- 16" MacBook Pro M1 Pro
- M1 Pro
- 16GB Memory
- 1TB NVMe

**Software**

This machine is currently not managed via Nix, but I've got some plans to put together a Nix config for it. 

### goofycalahan

`goofycalahan` is going to be our secondary replication target for our NAS. Any important or key information will be replicated offsite to a friend's house. 