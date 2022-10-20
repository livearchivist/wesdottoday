---
layout: garden_item
title:  "Using a Mobile Sensor to track school IAQ"
date:   2022-10-20 08:52:11 -0400
category: IAQ
tags:
  - iaq
  - vgt
  - co2
  - school
type: branch
published: true
permalink: /garden/iaq/using_mobile_sensor_to_track_school_iaq.html
---

A friend of mine recently came to me asking if his son could take a mobile sensor into his school to track the indoor air quality, to which I said "Of course!"

His son has been complaining that in one particular room, he feel tired and slow during class. I've been a teenager before, so I immediately thought that it was maybe due to him being a tired teenager, but then I got to thinking about how poorly designed the school I went to was too. Maybe we have a serious fresh air problem in our schools.

So the plan is in motion. I will be taking a Raspberry Pi Pico W and pairing it with a SCD-41 [^scd41] sensor, which has the ability to track Temperature, Humidity, and CO2. This is an actual CO2 sensor, rather than eCO2 [^eco2]. There are a few problems with this setup:

1. Power
2. Connectivity
3. Date/Time

### Power

I've not designed my sensors to be powered on the go yet, so we needed to come up with a quick solution. The easiest answer is a battery bank, which I'm sure should be no problem for this short-lived test. Eventually I will design a power circuit and a battery "backpack" for our IAQ-Micro-Wifi sensor, but not until I get custom PCBs made.

### Connectivity

I don't want him to have to worry about getting the device on school wifi or relying on his mobile phone hotspot to communicate the data back, so we will have to do some local caching of the data. My plan is to have him turn the sensor on at home, where it can join their wifi, get NTP and set the time on the RTC. Then he can go to school. I will have the device check for a wifi connection every 10 readings and if not available, put the radio to sleep and store the datapoints in a file locally. The file will need to be flushed at the end of each reading in case the battery bank fails, that way we don't lose any readings that were in-memory. 

When he gets home from school and re-joins wifi, the data points will be uploaded to a public MQTT or InfluxDB server. I need to think through this process because both are meant to be consumed realtime and we need to retain the date/time of each sensor reading, rather than it looking like hundreds of data points all happened at roughly the same time. From there, Grafana can put together some decent dashboards for us to look at.

### Date/Time

Since we won't have wifi during most of the time that he will be collecting data, we needed to set the time at home first, then go about his day. Thankfully that is solved by joining the wifi at home, setting the RTC using NTP, then going to school. 

### End Goal

I hope that we find nothing, I really do. I hope that he's just a tired teenager, but I suspect that this room has insufficient air flow, causing a build up of CO2. I'll update in a few weeks once we have something to look at.

[^scd41]: SCD-41 True CO2 Temperature and Humidity Sensor. [Adafruit SCD-41](https://www.adafruit.com/product/5190)

[^eco2]: SGP30 VOC and eCO2. [Adafruit SGP30](https://www.adafruit.com/product/3709)