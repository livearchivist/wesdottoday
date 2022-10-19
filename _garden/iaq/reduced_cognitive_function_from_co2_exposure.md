---
layout: garden_item
title:  "Reduced cognitive function from CO2 exposure"
date:   2022-10-18
modified_date: 2022-10-19
category: IAQ
tags:
  - iaq
  - health
  - cognition
  - co2
type: branch
published: true
permalink: /garden/iaq/reduced_cognitive_function_from_co2_exposure.html
---

Carbon Dioxide is something that has been monitored for a long time in sealed environments. Living creatures, by and large, emit CO2[^co2] as a part of their respiration and when you're in a sealed environment the oxygen content will lower over time. As oxygen content lowers and CO2 increases beyond 1500ppm[^ppm], cognitive function can be measurably reduced. 

> "Recent studies reveal that higher than normal levels of CO2 decrease cognitive functions that lead to productivity issues in office workers. In education settings, excessive CO2 levels lead to lower student test scores. CO2 levels have steadily increased indoors the last three decades as construction codes mandated tighter building envelopes in the quest for better energy efficiency. Therefore, today’s tighter building construction methods are partially responsible for this alarming rise CO2. The solution is adding energy-efficient outdoor air technology to dilute indoor airborne CoC, including, but not limited to CO2, so it has minimal effect on the human condition." [^hpac]

As more and more people are working from home in their spare bedrooms or even dedicated offices, I suspect that they're being subjected to higher levels of CO2 than they're used to. My home is pretty well built and has air returns in every room, but the entire house is one HVAC zone. When I close my office door, within an hour or two I often see CO2 rise above 1000ppm, requiring me to open my door or the window. With a small child at home, it's not very ideal to have my door open, and with winter approaching it's not ideal to have my window open.

When we look at this problem through the lense of United States home construction, we find that older homes were drafty and not well sealed which will lead to more fresh air being brought in from outdoors through the nooks, cranies, and cracks. Unfortunately, older homes often did not have great ventilation (usually a lack of air returns in each room, or no HVAC at all), so if you are in a very small room, often the draftiness of the room was not sufficient enough to offset the CO2 production from your face-hole. 

Newer building codes call for tighter sealed buildings, but HVAC code has not caught up with this. So often we will find newer homes that are insulated and sealed better, but still have very high CO2 levels because there is not adequate fresh air being brought into the building from outside. 

The solution to both issues, whether old house or new, is HVAC that is designed to bring in fresh air from outside - which is often accomplished with an ERV[^erv] or HRV[^hrv]. Couple improving your HVAC with monitoring of gas levels in each room and you've got a recipe for success.

Of course, all of these things cost money, and there isn't always a method of having your employer pay for something like HVAC improvements in your home, so we often have to come up with solutions ourselves and foot the bill. That's what I'm in the process of doing. We installed an ERV at the start of the pandemic and we are slowly deploying [custom sensors that I've developed](distributed_iaq_sensor_platform.html) throughout the house. 

Let's dive into the actual cognition issues and what you might see.

### cognitive decline

You're probably getting dumber as you read this, not because I'm terrible at writing (I am), but because you're most likely in a small sealed room. If you're outside, put your damn phone down and go enjoy the great outdoors.

Studies have shown about a 15% reduction [^red] in cognition on a day of exposure to high CO2 (1400ppm), when compared with a baseline exposure level of <1000ppm in a conventially designed facility. At first I thought that 15% isn't a significant level of decline, but then I actually thought about what that would mean on the scale of a year. 

If you assume 5 days a week, 48 weeks a year of working days, you get 240 days that you spend at work. That's a lot of time. 15% of that is 36 days - over a month. So if you're performing at a 15% reduction of your normal capacity, and we assume that your productivity is linear (which it certainly is not), you are effectively reducing your working mental capacity by a month each year. That's not an insignificant amount of reduction.

So what does cognitive decline look like? .... To be written




[^co2]: Carbon Dioxide. Recent studies reveal that higher than normal levels of CO2 in indoor spaces decrease cognitive functions that lead to productivity issues in office workers. In education settings, excessive CO2 levels lead to lower student test scores.

[^ppm]: Parts Per Million. A measurement that is often used to identify the amount of a particular molecule present in air. 

[^erv]: Energy Recovery Vehicle. An ERV is a system that is often tied to the air handler in an HVAC system. It is used to bring in fresh air from outdoors into a building, using a specially designed system to transfer the heat or cool energy from air being pulled from your air return.

[^hrv]: Heat Recovery Vehicle. A HRV is a system that is often tied to the air handler in an HVAC system. It is used to bring in fresh air from outdoors into a building, using a specially designed system to transfer the heat energy from air being pulled from your air return. HRVs are generally cheaper than an ERV, but only transfer heat energy. If you live in a location where you rely on Air Conditioning, I highly recommend you purchase an ERV.

[^hpac]: [HPAC - Increasing Cognitive Function by Decreasing Indoor CO2 Levels](https://www.hpac.com/iaq-ventilation/article/20929934/increasing-cognitive-function-by-decreasing-indoor-co2levels)

[^red]: [EHP - Associations of Cognitive Function Scores with Carbon Dioxide, Ventilation, and Volatile Organic Compound Exposures in Office Workers: A Controlled Exposure Study of Green and Conventional Office Environments](https://ehp.niehs.nih.gov/doi/10.1289/ehp.1510037#t5)