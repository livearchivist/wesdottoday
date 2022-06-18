---
layout: post
category: i3wm
title: "Saving an i3 Workspace Layout"
published: true
---

In my office I have a small portrait display off to the side that I like to keep a few of our security cameras up on during the day. Two are exterior cameras watching the front door and the driveway, the other is my son's nursery camera so I know how quiet or loud I can be since my office is right next to his nursery.

The _really_ old Intel NUC that drives the display runs NixOS and boots into i3 window manager. For a while I was manually launching the cameras but I wanted something that would boot straight to the camera configuration that I like. 

First, manually arrange the windows in a way that makes sense for you.

Switch to another Workspace and then launch a terminal:

``` bash
$ i3-save-tree --workspace 1 > ~/.config/i3/workspace-1.json
```

Then we need to edit the `workspace-1.json` file to actually work, because the `i3-save-tree` command comments out the blocks that are important. Below is what mine looks like. Take notice in how I had to add additional braces and square brackets to make the `json` legit.

`workspace-1.json`

``` json
// vim:ts=4:sw=4:et
{ "nodes": [
   {
      "border": "none",
      "current_border_width": 0,
      "floating": "auto_off",
      "geometry": {
         "height": 1080,
         "width": 1920,
         "x": 4294966720,
         "y": 143
      },
      "marks": [],
      "name": "Media Presentation - mpv",
      "percent": 0.333333333333333,
      "swallows": [
         {
         "class": "^mpv$",
         "instance": "^gl$",
         "title": "^Media\\ Presentation\\ \\-\\ mpv$"
         }
      ],
      "type": "con"
   },

   {
      "border": "none",
      "current_border_width": 0,
      "floating": "auto_off",
      "geometry": {
         "height": 1080,
         "width": 1920,
         "x": 4294966720,
         "y": 143
      },
      "marks": [],
      "name": "Media Presentation - mpv",
      "percent": 0.333333333333333,
      "swallows": [
         {
         "class": "^mpv$",
         "instance": "^gl$",
         "title": "^Media\\ Presentation\\ \\-\\ mpv$"
         }
      ],
      "type": "con"
   },

   {
      "border": "none",
      "current_border_width": 0,
      "floating": "auto_off",
      "geometry": {
         "height": 1080,
         "width": 1920,
         "x": 4294966720,
         "y": 143
      },
      "marks": [],
      "name": "H.264 Video,leco stream - mpv",
      "percent": 0.333333333333333,
      "swallows": [
         {
         "class": "^mpv$",
         "instance": "^gl$",
         "title": "^H\\.264\\ Video\\,leco\\ stream\\ \\-\\ mpv$"
         }
      ],
      "type": "con"
   }
   ]
}
```

You'll notice that the first two windows have a different title than the third. That's because the third stream is from a different brand of camera and carries different metadata.

Then, we need to modify our i3 config to auto-launch this config before it launches the three windows for the cameras. Add the below line before the `exec` commands for the applications you want to launch.

`~/.config/i3/config`

``` bash
exec --no-startup-id "i3-msg 'workspace 1; append_layout /home/username/.config/i3/workspace-1.json'"
```

Now I just need to work out auto-login, then I can strip all interactive capabilities away from the machine and it'll be all set.