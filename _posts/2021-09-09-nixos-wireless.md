---
layout: post
category: NixOS
title: "Managing Wireless Networks in NixOS"
published: true
---

I like to manage everything I can in an explicit fashion on my NixOS machines, meaning even on my laptop I make sure to declare the wireless networks that I can connect to. This is not as expedient as using user space NetworkManager, but it works well for me.

Below you'll find the steps I use to manage my wireless networks on NixOS. 

``` bash
$ wpa_passphrase ssid_here wpapsk_here

network={
	ssid="ssid_here"
	#psk="wpapsk_here"
	psk=0a44d644002cadc71fd71b253978f589a2ab6fb9b5ab938e94ad8b137037d325
}
```

The output of the command is a hashed version of your raw pre-shared key. Copy that hash, and we'll insert it into our NixOS config.

`configuration.nix`

``` nix
  networking.wireless = {
    enable = true;
    userControlled = {
      enable = true;
    };
    interfaces = ["wlp61s0"];
    networks = {
      ssid_here = {
        # hidden = true;
        pskRaw = "0a44d644002cadc71fd71b253978f589a2ab6fb9b5ab938e94ad8b137037d325";
      };
      ssid_here2 = {
        pskRaw = "e735acf4662397d551cc0dc85964b24b1beeb9f9638a18ac3544a4e02036f064";
      };
      open_wifi_stealing_ur_datas = {};
    };
  };

```

Then you just need to run a quick rebuild and you're all set!