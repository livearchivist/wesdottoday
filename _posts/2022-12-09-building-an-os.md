---
layout: post
title:  "Building An Operating System | AnselOS - It Begins"
date:   2022-12-09 08:52:11 -0400
categories:
  - Rust
  - OS
  - AnselOS
published: true
---

On the list of things I thought I would be doing in my free time at the end of 2022, I did not expect to find _Write my own operating system_, but there it sits, staring me in the face every day. Those that know me personally know that I've got a lot of deep shit going on right now, but one of the ways I like to cope and release stress is to work on side projects. Notice I said work on, not complete.

Over the years I've developed a pretty opinionated view of technology and the world. In my opinionated view of technology, I've come to expect a lot out of the machinery that I interact with on any given day. I expect that things perform well, they're reliable, and they be built solidly. I expect that things are repeatable, which is hilarious when working at a company so early to a lot of tech, but it's the way my brain works.

So when I approach an Operating System, I've generally not expected much except that it show up each day and do it's job. We all know that I've struggled on and off with MacOS since Snow Leopard, with quality and reliability going downhill, in exchange for nifty features. I've hated anything Windows for far longer than I can remember. Ubuntu has always been a comfy home, but it's flawed in many ways. And NixOS - oh boy do I love me some NixOS - but fuck can it be complicated.

I've always viewed my personal infrastructure operating in varying states from _don't fuck this up or the family will kill you_ to _this is your lab to screw around with and never expect anything to work_. My home infrastructure plans are fairly intense, but I've never implemented them, because the orchestration around making it all idempotent always made things way too complicated.

There are tons of tools out there to make operating systems bend to your will, but I wanted to take a different approach... Make an Operating System that enforces some of the ideas that are in my head, the beliefs I have, and that's what I'm going to be working on. 

Over the next `TIME_PERIOD`, I will be building an operating system with a focus on non-x86 systems: ARM64 and RISC-V. I want to see many more ARM and RISC-V systems out there, particularly RISC-V.

So I'm going to be building the OS of my dreams. Let's talk about it a bit.

## AnselOS

AnselOS is named after Ansel Bourne, who was a famous assassin who had amnesia. Which, is pretty convenient when you're an assassin. I chose this name because the system will be amnesiatic. Information that isn't declared to be persistent will be wiped on reboot. I've [written about this](https://wes.today/my-nixos-setup-with-an-encrypted-amnesia-tic-zfs-filesystem/) as has [Graham Christenson](https://grahamc.com/blog/erase-your-darlings), you should go read those posts - I'll chill here and wait.

The concept behind your system being Amnesiatic is tri-fold:

1. It forces you to be descriptive and thoughtful on what you do with your computer/server
2. It ensures that errant system states are reset on reboot
3. You know exactly what to expect when you boot the system (or clone/deploy a copy)

So let's talk about the overall ethos of the project...

### Ethos

Open Source from the beginning. Every single commit, for realsies. You can find the repo here: [Gitlab/AnselOS](https://gitlab.wes.today/wk/AnselOS).

I haven't gotten around to licensing it, but let's just assume it's a _do whatever the fuck you want_ licenese. You can clone the repo, call it something else, and claim it as your own - that's fine with me.

AnselOS will be opinionated, not quite a dictatorship, but I will have the final say on Issues/MRs/etc. I'm trying to reach a certain goal, which I will outline more through this post. *NOTE: This does not mean I'm unwilling to accept input or admit that I was wrong*, this is mostly just to make sure that people's feelings don't get hurt in the future.

The project will remain open and inviting to people of all spectrums, except assholes. We're gonna define assholes kind of like the Supreme Court defines pornography, you know it when you see it.

### Key Goals

There are a few key goals for AnselOS.

First, AnselOS will be **Performant**. I firmly believe that we've wasted the performance improvements in hardware, with shitty software. I'm to blame for this as well and it's part of the reason why I'm starting this project, in order to learn Rust, learn how an OS works (or doesn't work) from the ground up, and write some good hardware. Along with this will come a number of other items in the development process: testing (including perf testing), automated build process which will including code linting, documentation linting, and more, multi-architecture support (ARM64 and RISC-V initially), and many more things. I want to make low power devices performant again.

Second, AnselOS will be **Declarative** and **Ephemeral**. Configuring an AnselOS system will be done through a handful of YAML files - not because I love YAML, but because it's not terribly difficult to get a grasp of. There will never be an interactive installer for AnselOS - here be it declared. I believe firmly that configurations for machines should be able to be checked into a versioning system to ensure that you can re-deploy to a working config at any time. NixOS does this well, but the Nix language is difficult to grasp. Oh yeah, the systems will always be designed to be ephemeral. More than ephemeral, they will also be amnesia-tic. Being ephemeral is only possible when the system is deployed in a declarative fashion. 

Third, AnselOS will be **Pluggable**. The system will enable or disable modules based on what Operating State the machine is configured for and what features are enabled. I want the base OS to be as minimal as reasonable, ensuring that it should remain performant.

## Want More? Me too...

I've just barely started this journey. I've written more about it in the repo than I've coded it - mostly because all of the hardware I need is in my neighbor's house right now, since I'm out of town and they're picking up our packages. Please dive into the repo and read up on more of my thoughts. Feel free to open issues, I'd love to hear from you.