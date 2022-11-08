---
layout: post
title:  "Well Done Framework"
date:   2022-11-08 08:52:11 -0400
categories:
  - Gear
published: true
---

After running a Lenovo T480s as my personal daily driver for a number of years, it was time to replace it. I had inherited the Lenovo from a previous employer who didn't want it back (it was used when they assigned it to me). So I'm not exactly sure how many years of use and abuse it had been through, but what I do know is two weeks ago it decided it was done booting. Re-installing the machine didn't help. So I pulled the trigger on the laptop I had been eyeing, a [Frame.work 12th Gen DIY](https://frame.work/laptop-diy-12-gen-intel). 

I ordered the laptop with an Intel i7-1280p chip and no memory or drives. I purchased the memory (Crucial 64GB) and NVMe (Western Digital SN850 4TB) from another vendor which could be found for a bit less money. I also grabbed (2) USB-C, (1) USB-A, (1) HDMI, (1) Displayport, (1) Ethernet expansion cards. After receiving and using the laptop for a day or two, I decided to order a few more expansion careds: (1) USB-C, (1) USB-A, (1) 1TB Storage.

The unboxing experience was very good and didn't feel like an environmental catastrophe like a new Apple product with their waxed cardboard/plastic hybrid boxes that can't be properly recycled. There are probably some room for improvement in the packaging area from an environmental perspective, but overall I was quite pleased. I should be able to either recycle or compost most of the cardboard packaging after ensuring that the machine doesn't need to be returned for any defects (which I don't anticipate). 

### The Good

I have almost only good things to say about this computer so far. The build quality is excellent, particularly for a computer that is this easily repairable. All of the parts fit together well, the aluminum feels nice to the touch, and the keyboard is solid.

Everything on the Framework is user replaceable and well documented. I could easily see keeping the shell and upgrading pieces of the computer over time, assuming I don't damage it too much. I'm very excited about this, much more excited than I've been about a piece of technology in a long time. The repairability will hopefully lead to a thriving aftermarket community as well <3

Installing the memory and NVMe was a piece of cake. There are five captive screws on the bottom of the laptop that you need to unscrew with the included screwdriver/spudger combo tool. 

> NOTE: Be careful removing the keyboard cover, it has a cable attached to the mainboard.

Unlike nearly every laptop I've had in the past, this machine keeps the base attached to the display and you instead remove the keyboard/trackpad to access the internals. The keuboard cover is aligned with magnets, which creates a great seal, I was impressed by the fit.

Inside, everything is covered with QR codes that mostly lead to knowledge base articles about working on that particular part. I say "mostly", because other people have reported that some of the codes lead to a 404. I didn't test them all to verify this, but I consider [Graham](https://grahamc.com/blog/nixos-on-framework) to be pretty reliable.

Once I got the memory and NVMe installed, which is an unremarkable process, just as you'd want, I put the machine back together. With some very simple instructions, I suspect that nearly anyone could buy the DIY model and put it together. I do wish it were more of a DIY scenario, but I understand that leads to a lot of customs issues because it goes from being considered a "computer" to "computer parts". Once again, the government ruins everyone's fun.

I decided against my traditional Amnesiatic NixOS setup for a more broadly supported Linux experience running Ubuntu Desktop 22.04. This laptop is meant to be a long haul device for me, so I need to ensure that it supports everything I need - including D&D apps, Zoom, 3D Printer software, and many other things. It made me sad, but I'll eventually build out a Nix configuration for it as a happy medium. 

Installing Ubuntu 22.04 was a piece of cake and everything seems to be supported, including the fingerprint sensor (the power button). As someone who DD's a M1 Pro for work and has gotten used to TouchID, this is a glorious thing. 

Typing on this machine feels similar to my Lenovo, but ever so slightly spongier. Maybe it's from spending years on either a Lenovo, mechanical, or M1 MacBook keyboard, but something feels different about it. Not in a bad way though, I just think I'm used to what I'm used to. Honestly, as I sit here writing this post on that keyboard, I'm starting to like it more and more. 

The camera seems pretty good and I like it better than my M1 MacBook's camera because it doesn't have that make-up effect that you can't turn off. I don't know what Apple was thinking with that feature, but I have no interest in smoothing out my face, I am who I am, please stop contributing to self-perception issues.

I haven't tested the speakers or microphone because I almost never use what's built in to my laptops.

Performance is rock solid and I've barely heard the fan, even when I've really pushed the machine. 

The expansion cards really offer a world of flexibility and I'm excited to see what the community comes up with here. I'm already thinking about if I could do an air quality sensor in one and maybe even a small DAC for headphones (although I suspect it might be too tight for that).

### The Eh

The trackpad is fine. I'd kill for some light haptic feedback when tap clicking, but it's resonably sized, has pretty good finger feel, and my palm doesn't cause it to jump around when I type.

The 3:2 display format is one I'm a big fan of, but the oddball size seems to confuse some OSes on initial boot, causing some stretching. This isn't really an issue that Framework needs to solve for, but one that the OS vendors (or more specifically, the desktop environment) need to sort out. 

Battery life is _okay_. I haven't put it through full paces yet, but I've burned through about 20% in 90 minutes while writing this post. Borg did a backup during this time period of a few gigabytes, but otherwise not much else was going on. I have the screen at about 70% brightness to combat the glare coming from the windows behind me, more on this in a minute. I suspect I'll change some power settings to help dial this in. The good news is, I am rarely more than a few feet from power, but I could see this becoming an issue on cross continental flights so I'll have to check out how well some of my battery packs keep this thing running.

No trackpad backlight, I'm a touch typist, but sometimes I get lost. Not a big loss for me but it might be a bigger deal for some.

### The Bad

The screen hinges are _terrible_. I'm writing this post with the laptop sitting on a very stable table, but yet the screen is woblling noticeably and it's exacerbated by the reflective glare on the display. The good news to this? You can easily replace the hinges with the [4kg hinge kit](https://frame.work/products/display-hinge-kit?v=FRANFB0002), which I've ordered, because everything on this computer is user repairable. I'll write up the replacement process once I get the new hinges in.

The display is so glossy and so reflective. If you're in anything but a dark room, you're going to be staring at a mirror. I'm going to be researching matte display covers. I highly recommend Framework offer a matte display option in thhe future. If they offered a native display with matte, I'd order it and replace my display immediately.

### Should you buy it?

I can't speak for you, but I would 100% buy this again. It was a direct competition between the MBA M2, loaded, but with this machine I get repairability, 40GB more memory, 2TB more NVMe, for roughly the same price. Build quality isn't on-par with Apple, but it's in the ballpark without resorting to glueing everything together. 

If repairability and long lasting usage of a machine speaks to you. If you are growing tired of Lenovo and Dell. If you're a Linux user. Any of these things should make this laptop an obvious contender for you. I could have gotten into the machine for much less money than I spent, but I wanted to max it out while I was dropping the coin. 

Seriously, Framework Team, you guys killed it!