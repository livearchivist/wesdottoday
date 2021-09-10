---
layout: post
category: NixOS
title: "Managing Syncthing in NixOS"
published: true
---

As a continuation of my posts on NixOS, I thought I'd write about how I use and declare Syncthing to manage data syncronization and replication across my machines.

We will focus on two different configurations: Syncthing for my `code` directory and Syncthing for my CoreDNS machine configuration files. I use declarative configurations for all machines and folders that take place in the synchronizations, which is a bit tedious but is worth the effort.

### Basics

First, let's walk through the basic configuration for the Syncthing service. You'll note that I've snipped out the declarative configuration portion for now, we will cover that later.

`configuration.nix`

``` nix
services.syncthing = {
  enable = true;
  dataDir = "/home/wk";
  openDefaultPorts = true;
  configDir = "/home/wk/.config/syncthing";
  user = "wk";
  group = "users";
  guiAddress = "0.0.0.0:8384";
  declarative = { SNIPPED };
};
```

The above code block does the following:

1. Enables the Syncthing Service
2. Sets the Data Directory (the default sync directory, but we won't use this)
3. Opens the default ports (21027/tcp & 22000) - note this doesn't include the web interface
4. Sets the Config Directory (important because I sync it as a part of my .config files)
5. Sets the user that Syncthing runs as
6. Sets the group that Syncthing runs as
7. Sets the Web Interface to listen on all interfaces (for machines that are headless, I set to `0.0.0.0`, otherwise `127.0.0.1`)

### Declarative

The below stanza is a mildly edited version of my desktop config. You'll notice that I'm declaring devices `laptop` and `coredns-server`, while on my laptop I would declare `desktop` and `coredns-server`.

Let's walk through the config.

`configuration.nix`

``` nix
services.syncthing = {
  { SNIPPED }
  declarative = {
    overrideDevices = true;
    overrideFolders = true;
    devices = {
      "laptop" = { id = "REALLY-LONG-LAPTOP-SYNCTHING-KEY-HERE"; };
      "coredns-server" = { id = "REALLY-LONG-COREDNS-SERVER-SYNCTHING-KEY-HERE"; };
    };
    folders = {
      "code" = { 
        path = "/home/wk/code"; 
        devices = [ "laptop" ]; 
        versioning = { 
          type = "staggered"; 
          params = { 
            cleanInterval = "3600"; 
            maxAge = "15768000";
          }; 
        }; 
      };
      "coredns-config" = { 
        path = "/data/coredns-config"; 
        devices = [ "coredns-server" ]; 
        versioning = { 
          type = "simple"; 
          params = { 
            keep = "10";
          }; 
        };
      };
    };
  };
};
```

These stanzas can get pretty long, but you can collapse them in your config and make them all appear on one line. 

``` nix
overrideDevices = true;
overrideFolders = true;
```

First, we tell Syncthing to override the devices and folders that are configured in the web interface. Each time you run a `nixos-rebuild switch` the configuration of Syncthing will be overridden.

``` nix
devices = {
  "laptop" = { id = "REALLY-LONG-LAPTOP-SYNCTHING-KEY-HERE"; };
  "coredns-server" = { id = "REALLY-LONG-COREDNS-SERVER-SYNCTHING-KEY-HERE"; };
};
```

Declaring the devices is a little complicated as there seems to be no automated way to grab the device ID's. I usually hop into the web interface of each device and go to `Settings -> Show ID`, then copy and paste it into my config. 

_**Note: ** if you don't persist the `configDir`, the device ID will change after each `nixos-rebuild switch`._

``` nix
folders = {
  "code" = { 
    path = "/home/wk/code"; 
    devices = [ "laptop" ]; 
    versioning = { SNIPPED }; 
  };
};
```

Now we'll get around to declaring the folders to synchronize. 

All you need to do is set the `path` and `devices` in which to share the folder. The versioning stanza is optional and we'll talk about that next.

### Staggered Versioning

For my `code` directory, I replicate it between my desktop and laptop, both of which run NixOS. On both machines I have `versioning` setup to ensure I keep all changes to files for 180 days. All versions will be stored in the root of the synchronized directory under a `.stversions` directory. The directory tree will be re-created under the `.stversions` directory.

``` nix
versioning = {
  type = "staggered";
  params = {
    cleanInterval = "3600"; # 1 hour in seconds
    maxAge = "15552000"; # 180 days in seconds
  };
};
```

You'll see that I chose the versioning type of `staggered`, which you can read more about [here](https://docs.syncthing.net/users/versioning.html#staggered-file-versioning). The gist of staggered versioning is Syncthing will keep new versions created with an RPO of down to 30 seconds for the first hour, hourly versions for the first day, daily versions for the first month, and weekly versions until the `maxAge` is reached.

I set the `cleanInterval` parameter to hourly, meaning each hour it will purge old versions that have aged out. Then finally I configure the `maxAge` to 180 days calculated in seconds.

### Simple Versioning

For my `config` directories, I like to keep just a handful of old versions of the config files. This ensures that I'm not eating up a ton of disk space, while giving me the ability to roll back far enough to resolve issues I create for myself.

``` nix
versioning = { 
  type = "simple"; 
  params = { 
    keep = "10";
  }; 
};
```

For my config directories, I prefer to use `simple` versioning, which you can read more about [here](https://docs.syncthing.net/users/versioning.html#simple-file-versioning). Syncthing will simply keep the old versions until the number of old versions exceeds the `keep` number. For my setup, I currently keep `10`, which seems to work for me. 

### Fin

And finally, the full configuration in all it's glory.

`configuration.nix`

``` nix
services.syncthing = {
  enable = true;
  dataDir = "/home/wk";
  openDefaultPorts = true;
  configDir = "/home/wk/.config/syncthing";
  user = "wk";
  group = "users";
  guiAddress = "0.0.0.0:8384";
  declarative = {
    overrideDevices = true;
    overrideFolders = true;
    devices = {
      "laptop" = { id = "REALLY-LONG-LAPTOP-SYNCTHING-KEY-HERE"; };
      "coredns-server" = { id = "REALLY-LONG-COREDNS-SERVER-SYNCTHING-KEY-HERE"; };
    };
    folders = {
      "code" = { 
        path = "/home/wk/code"; 
        devices = [ "laptop" ]; 
        versioning = { 
          type = "staggered"; 
          params = { 
            cleanInterval = "3600"; 
            maxAge = "15768000";
          }; 
        }; 
      };
      "coredns-config" = { 
        path = "/data/coredns-config"; 
        devices = [ "coredns-server" ]; 
        versioning = { 
          type = "simple"; 
          params = { 
            keep = "10";
          }; 
        };
      };
    };
  };
};
```

That's _all_ there is to it. I wrote this primarily because there's not a lot of good documentation on how to implement Syncthing in NixOS out there. I have used ST for years and have been very pleased with it. You'll probably see that I do a lot of synchronization to my `/data` folder, which would be accurate. I usually symlink a machine's `/data/{hostname}` folder with `/home/wk/.config` to ensure most of my important configurations are synchronized by Syncthing.

Let me know if you have any questions!