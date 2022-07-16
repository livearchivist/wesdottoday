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
- (2) Micron 1.92TB NVMe
- (2) NVIDIA A6000 GPUs
- NVIDIA BlueField-2 100G DPU

**Software**

- Ubuntu 20.04 Desktop (I had to switch from NixOS to Ubuntu to have more solid support for development on NVIDIA BlueField-2 - my dayjob)

### maracapants

`maracapants` is my personal laptop that gets used for lots of random projects. It's most likely going to be replaced in the next year or so with a M2 MacBook Air.

**Specs**

- Lenovo T480S
- 24GB Memory
- 1TB NVMe

**Software**

- Ubuntu 22.04 Desktop

### goofynewton

`goofynewton` is our family QNAP. It runs Plex, Sonarr, Radarr, NZBGet, all of our backups, etc. It's extremely important in our house. Critical data is backed up off-site using BorgBase.

**Specs**

- QNAP TS-873A
- 64GB Memory
- (2) 500GB NVMe
- (1) 2TB SSD
- (7) 14TB Toshiba Enterprise HDD

**Software**

- Ubuntu 22.04 Server

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

`goofycalahan` is mostly for work, but it does live at my house. It's a QNAP TS-h1290FX (all NVMe) with plenty of horsepower. I need this for some work demos, but it'll probably end up doing some fun stuff for personal use too.

**Specs**

- QNAP TS-h1290FX
- 128GB Memory
- AMD EPYC 7302P 16-Core @ 3.3Ghz
- (12) 3.2TB Samsung Gen 4 U.2 NVMe
- (1) NVIDIA Bluefield-2 100G DPU
- (1) Mellanox 200G CX-6

**Software**

- Ubuntu 20.04 Server 