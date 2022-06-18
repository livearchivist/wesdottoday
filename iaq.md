---
layout: page
title: Indoor Air Quality
permalink: /iaq/
exclude: true
---

One of my biggest interests is Indoor Air Quality. It's extremely important to ensure that the air you breath 90% of the time is clean and not full of gasses and VOCs. 

I'm in the process of developing a distributed set of indoor air quality sensors that you would deploy throughout your home to get a full picture of how clean your air is. The current design is based on Raspberry Pi 4 with a bunch of Grove sensors. I chose Grove sensors to enable us to quickly swap out different sensor types: Formaldehyde, Particulate Matter, Multichannel Gas, and Temp/Humidity.

**2022-06-18 Update:** In progress of dialing in the 3D printed enclosure, then will get infrastructure stood up.

### Hardware

- Raspberry Pi 4B - 4GB (had them on-hand)
- Grove BME680
- Grove Formaldehyde
- Grove Particulate Matter
- Grove Multichannel Gas
- Grove i2c hub

### Software

In progress