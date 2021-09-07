---
layout: post
category: NixOS
title: "Replacing Pi-Hole with NixOS & CoreDNS"
published: true
---

Recently my Pi-Hole decided it was done living which caused all sorts of havoc for my network since it was the primary DNS server listed on my Ubiquiti products. You see, Ubiquiti has a bug if you use their central auth that if your primary DNS server goes down, it will not connect to authenticate your login to their products, so you cannot login to your Unifi Management portal. Slightly inconvenient and absolutely ridiculous.

So, I took this chance to ditch the Raspbian based Pi-Hole install and move it over to an Intel NUC running NixOS and CoreDNS. Why would I do this? Because NUC hardware is more reliable than Raspberry Pis and I love declarative based operating systems. Here's the process I went through to get all of this setup.

### NixOS Config

Because I needed this up and running stat, I didn't take the time to set up full disk encryption with remote unlock, I will do this down the road. This box doesn't hold a lot of sensitive information, so for now this will suffice. However, I would suggest you take a look at [this post](https://discourse.nixos.org/t/disk-encryption-on-nixos-servers-how-when-to-unlock/5030/3).

I'm not going to walkthrough a basic NixOS configuration as there's plenty of documentation on that, but I will point out the CoreDNS specific bits.

`configuration.nix`

``` nix
  #### COREDNS ####
  environment.etc."coredns/blocklist.hosts".source = ../blocklist.hosts;

  services.coredns = {
    enable = true;
    config =
    ''
      . {
        hosts /etc/coredns/blocklist.hosts {
          fallthrough
        }
        # Cloudflare Forwarding
        forward . 1.1.1.1 1.0.0.1
        cache
      }
      
      internal.domain {
          template IN A  {
            answer "{{ .Name }} 0 IN A 10.80.0.9"
          }
      }      
    '';
  }; 

  networking.firewall.allowedTCPPorts = [ 22 53 ];
  networking.firewall.allowedUDPPorts = [ 53 ];
```

A couple of things are happening here. First, we're creating the `blocklist.hosts` file inside of `/etc`. Then, we're enabling the `coredns` service and passing it a config. In the config, we're first telling it to respond to all requests by parsing a `hosts` list and then dropping any matching request with `fallthrough`. Then, it forwards any request that it does not hold records for to Cloudflare. Finally, we have an entry for our `internal.domain` which I have a dedicated domain that we use internally, which will redirect any requests to my reverse proxy at `10.80.0.9`. 

Finally, we open the firewall for DNS traffic on port 53.

That's really all there is to it. 