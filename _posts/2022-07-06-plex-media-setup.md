---
layout: post
title:  "Plex Media Server Setup"
date:   2022-07-06 08:53:11 -0400
categories:
  - Plex
published: true
---

I recently went through the process of wiping my QNAP of the awful QNAP OS and install Ubuntu Server 22.04. It was shockingly simple, although there was a small catch since my NAS didn't have a HDMI port built in, I'll get to that in a moment. But first some of the basics:

### Hardware

**Qnap TS-873A**

- AMD Ryzen Quad Core 2.2GHz
- 64GB Memory
- (2) 500GB Samsung M.2 NVMes
- (1) Crucial 2TB SSD
- (7) Toshiba 14TB HDDs
- NVIDIA Geforce 1650 GPU

The Qnap has the IP address `10.80.0.20`, for the sake of this post.

### Software

- Ubuntu Server 22.04
- ZFS
- Docker

### Media Center Software

- Plex
- Sonarr
- Radarr
- NZBGet
- Ombi
- Tautulli
- Tdarr
- Tdarr-node
- Syncthing

### Installing Ubuntu on QNAP

Installing Ubuntu on my QNAP was _shockingly_ simple to do, because if you think about it, at the end of the day, this is just a x86_64 box with a traditional bios and other devices attached. The older QNAP units and ARM boxes are a little bit harder and there are some great tutorials out there on how to do it with those.

The biggest issue I ran into was that my QNAP did not have a native HDMI port (some do), but I did have a NVIDIA GPU in it already for transcoding. I thought, surely the bios will ignore the card through boot, but nope, it just worked.

So you plug in a keyboard, network, hdmi monitor, and USB Thumb Drive with Ubuntu loaded onto it, and power the sucker on. I don't remember the function key to jump into the bios (and my kid is currently watching Sesame Street so I won't dare reboot the box to check - sorry, not sorry), but it prints the key on the screen during POST, so it should be easy to sort out.

Once in the bios, head over to the `Boot` tab and you'll want to move the SATADOM/USBDOM to the bottom of the boot order (meaning you can still revert if this fails), put your Ubuntu installer Thumb Drive to the top of the list, then Save and Exit. You can pop around in the bios and tweak anything you'd like, but the boot order is the only thing I changed.

Once you boot into the Ubuntu installer, everything will go just as you've come to expect. I installed Ubuntu onto one of my 500GB NVMes and while in the installer I configured the other NVMe to be wiped and formatted with ext4, mounted at `/mnt/transcode` - to be used as a transcoding cache for Tdarr. Tdarr is hard on drives, so I needed to use one with a high endurance that could be replaced fairly easily without messing with any other software. 500GB is overkill, but with 4K and 8K media becoming more prevalent, movie sizes are getting larger and I often have 2-3 transcodes happening at once. 

### Base Software

Next up was getting Ubuntu setup to my liking. That really only means a few things in this case:

1. SSH Key Access
2. ZFS Install
3. Drive Configuration
4. Docker install (with NVIDIA)
5. Non-Sudo access to docker
6. Docker Compose Install

I'm going to skip over SSH Key Access, since you should already be familiar with that. But, you should check out my [SSH](/ssh) post about properly using `~/.ssh/config` files to easily access equipment. 

#### ZFS Install & Drive Configuration

I'm a huge fan of ZFS and a media server is a perfect usecase for it. `MDADM` would be _fine_, but I just prefer the elegance of ZFS.

``` shell
sudo apt-get install zfs-utils -y
```

WHAM! Installed!

``` shell
sudo fdisk -l | grep 12.73
```

In order to get the `sdX` letters for the 14TB drives, I grep out any drives that are `12.73TB` formatted from `fdisk`. Then I take those `sdX` letters and align them with the corresponding drives `by-id`.

``` shell
sudo ls -la /dev/disk/by-id/
```

Listing out disks by-id is useful, because these names don't change after a reboot and Ubuntu will manage the Symlinks in the background for you.

Now that we have all the drive ids, we can create our `zpool`.

``` shell
sudo zpool create media raidz2 /dev/disk/by-id/scsi-SATA_TOSHIBA_MG07ACA1_Y9X0A04HF94G /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL /dev/disk/by-id/scsi-SATA_TOSHIBA_FULLSERIAL
```

Then we need to add the SSD as a cache in front of the `raidz2`.

``` shell
sudo zpool add media cache /dev/disk/by-id/scsi-SATA_CT2000MX500SD1_FULLSERIAL
```

Now you should have a `/media` path where you can begin to create all of the folders you need `mkdir /media/{movies,shows,music}`.

#### Docker Install & Configuration

We will need docker to be installed with NVIDIA support and docker-compose. This is relatively simple, but I'll document it here for posterity.

``` shell
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce
sudo apt install docker-compose
sudo systemctl status docker
sudo usermod -aG docker wk
```

Now time to install NVIDIA stuff:

``` shell
sudo apt install nvidia-utils-515-server
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey
sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list
sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g'
sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update
sudo apt-get install -y nvidia-docker2
sudo systemctl restart docker
```

### Folder Prep

Let's get all of the folders setup as needed:

``` shell
mkdir -p /mnt/appdata/{downloads,plex,sonarr,radarr,nzbget,ombi,tautulli,tdarr,tdarr-node,syncthing}
mkdir -p /mnt/appdata/tdarr/{server,config,logs}
mkdir -p /mnt/appdata/tdarr-node/{config,logs}
mkdir -p /home/$USER/mediacenter
```

### Docker Compose

Below is the `~/mediacenter/docker-compose.yml` file I use:

``` yaml
---
version: "2.1"
services:
  syncthing:
    image: lscr.io/linuxserver/syncthing:latest
    container_name: syncthing
    hostname: syncthing-nas 
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/syncthing/:/config
      - /home/wk/mediacenter:/mediacenter
    ports:
      - 8384:8384
      - 22000:22000/tcp
      - 22000:22000/udp
      - 21027:21027/udp
    restart: unless-stopped
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - VERSION=docker
      - PLEX_CLAIM= #optional
    volumes:
      - /mnt/appdata/plex:/config
      - /media/shows:/tv
      - /media/movies:/movies
      - /media/music:/music
    restart: unless-stopped
  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/sonarr:/config
      - /media/shows/shows:/shows
      - /mnt/appdata/downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/radarr:/config
      - /media/movies/movies:/movies
      - /mnt/appdata/downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped
  nzbget:
    image: lscr.io/linuxserver/nzbget:latest
    container_name: nzbget
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/nzbget:/config
      - /mnt/appdata/downloads:/downloads
    ports:
      - 6789:6789
    restart: unless-stopped
  tautulli:
    image: lscr.io/linuxserver/tautulli:latest
    container_name: tautulli
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/tautulli:/config
    ports:
      - 8181:8181
    restart: unless-stopped
  ombi:
    image: lscr.io/linuxserver/ombi:latest
    container_name: ombi
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
    volumes:
      - /mnt/appdata/ombi:/config
    ports:
      - 3579:3579
    restart: unless-stopped
  tdarr:
    image: ghcr.io/haveagitgat/tdarr:latest
    container_name: tdarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
      - UMASK_SET=002
      - serverIP=10.80.0.20
      - serverPort=8266
      - webUIPort=8265
      - internalNode=true
      - nodeID=tdarr-mgmt
    volumes:
      - /mnt/appdata/tdarr/server:/app/server
      - /mnt/appdata/tdarr/configs:/app/configs
      - /mnt/appdata/tdarr/logs:/app/logs
      - /media:/media
      - /mnt/transcode:/temp
    ports:
      - 8265:8265
      - 8266:8266
      - 8267:8267
      - 8268:8268
    restart: unless-stopped
```

Then all we need to do is kick off the docker-compose.

``` shell
docker-compose up -d
```

### Tdarr Node

You can't launch the Tdarr Node using `docker-compose` right now, since compose doesn't support GPUs, so I've written a small shell script to launch it. `~/mediacenter/tdarr-node.sh`

``` bash
#!/bin/bash

docker run -d \
-v /mnt/appdata/tdarr-node/configs:/app/configs \
-v /mnt/appdata/tdarr-node/logs:/app/logs \
-v /media:/media \
-v /mnt/transcode:/temp \
-e "nodeID=tdarr-node-gpu" \
-e "serverIP=10.80.0.20" \
-e "serverPort=8266" \
-p 8269:8269 \
-e "TZ=America/New_York" \
-e PUID=1000 \
-e PGID=1000 \
-e "NVIDIA_DRIVER_CAPABILITIES=all" \
-e "NVIDIA_VISIBLE_DEVICES=all" \
--gpus=all \
--device=/dev/dri:/dev/dri \
--log-opt max-size=10m \
--log-opt max-file=5 \
--name tdarr_node \
ghcr.io/haveagitgat/tdarr_node
```

A quick `chmod +x ~/mediacenter/tdarr-node.sh` and then launch the script. You should then be able to navigate to `http://nasip:8265` and setup Tdarr. 

### Reverse Proxy

I'm currently using a reverse proxy located on another host, but I will be moving the proxy onto my nas in the coming days. At that point, I will update this section. My current proxy is based on Caddy, but I will be migrating to use the `swag` image from `linuxserver.io`.

### Application Configuration

This isn't fair, but I'm not going to document the process of configuring all the *arrs so everything works properly. There are a few reasons, but the primary ones are: there are already guides out there and I'm re-using configurations that I migrated from my old setup, so I truthfully don't remember the steps to set it all up. I'm happy to help if you get stuck, so hit me up on the [Twitters](https://twitter.com/wesdottoday).

### FIN

Now, you're all done, go watch some shit.