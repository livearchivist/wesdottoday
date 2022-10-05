---
layout: post
title:  "Don't Let the Industry Pass You By"
date:   2022-10-05 08:52:11 -0400
categories:
  - Tech Industry
  - Career
published: true
---

The tech industry moves fast. If you don't pop your head up every now and then you'll miss what's happening. When you're heads down for a long time inside of a single company, focusing on your job, your tasks, you might miss giant shifts in the industry. This isn't solely limited to the employees either, often companies hyper-focus on one problem for so long that they lose sight on what's going on outside of their niche, and before long, they can fall behind or even become obselete. The problems they're trying to solve can be eliminated by simple progression of technology. 

> Before we go any further, I want to be clear: I think the work we did at Nutanix was important and made a difference for our customers (I was the 14th customer of Nutanix after all)! My time there was the highlight of my career and I miss that team to the bottom of my heart. The caliber of talent, pure empathy for customers, and openness with how our techology works, made a significant impact in my thought processes. 

I joined Nutanix early, when storage performance was often the bottleneck for virtualized applications. Our customers came to us because had issues scaling their environments evenly, node by node, they were tired of the siloed approach between storage and compute, and several other problems. We resolved those problems well, but we spent so much time hyperfocusing on that one problem and always trying to bring solutions back to our data locality and inteligent underpinnings that we lost sight of what was going on. The industry rapidly shifted from hybrid storage deployments to all flash to all NVMe. 

We adopted all flash solutions (both SSD and NVMe) in our platforms, but we also decided to change up licensing to start charging based on TiB of Flash and CPU Cores - as Core density and TiB of flash requirements were skyrocketing - pricing us out of a lot of deals. Since we were now software licensing based, we would have to massively discount deals to be cost competitive, which lead to a perception that the software we were selling wasn't worth the price we asked. 

More than pricing, we also lost sight of what was happening to a lot of enterprise workloads. Enterprises ~~were~~ are adopting AI/ML and Data Lake workloads at a pace that's, frankly, shocking. When I left Nutanix in August of 2021, there were no hardware platforms that could support more than one GPU, so today I went out to their hardware page to see if that has changed - the greatest number of A100's they can support is **two**. That same platform (NX-3155GN-G8) can also support (x5) NVIDIA T5's for tensorflow workloads. Furthermore - those nodes are limited to 25GbE NICs, and cannot do all NVMe (limited to dual NVMe and hybrid tiering to SSD). Yes, you can argue that this is market researched and will limit a small portion of their customers, but I bet there are a lot of folks that do the research silently and mark Nutanix off the list of possible vendors based on the current supported platforms alone. 

Nutanix will most likely still capture some of that business using Nutanix Objects and Files, but will miss out on a large portion of the spend because of these hardware platform decisions. Beyond that there are technical requirements in a machine learning cluster that will prove difficult to Nutanix AOS in it's current design and will contribute to a need to support 100G and beyond for network interfaces - ML training clusters need access to a vast data set across all nodes. With these data sets being larger than what might fit on a particular node, data locality (Nutanix's prime feature), will be rendered ineffective, leading to a lot of churn in the cluster and many remote reads. With blocks moving around as needed by these clusters, plus the high throughput requirements to feed GPUs, you'll find that 25GbE networking will no longer cut it - especially when a single NVMe can basically flood a 25GbE port. 

So does Nutanix build out support for workloads like this and fingerprint them like they do with other workloads? Or do they stay the path and focus on their current core business? It's hard to say, but the changes needed are not minor and not fast to implement correctly.

> Ragging on Nutanix isn't the point.

The point of this blog post isn't to rag on Nutanix, because they've done a remarkable job of building one of the most resilient computing platforms on the planet, while maintaining a ridiculously high NPS score for more than a decade. The point of the last few paragraphs was to point out that the industry shifted, workloads evolved, and that can quickly render a highly performant and resilient platform ineffective to those workloads, without the ability to rapidly shift course and support them. I'm confident that Nutanix _could_ make the shift if needed, but I'm not sure under the current leadership would make that decision. 

More important than that, I believe that if you're an employee at any company you, need to pay attention to situations like this. It's easy to drink the company Kool-Aid&trade; and think that what you're working on is what the industry wants, but that can change at the drop of a hat. 

I could have easily stayed at Nutanix for 5 more years, even 10, and been happy. The culture, the people, are all excellent. But I saw the industry changing, I saw opportunities being missed, I saw growth opportunity for my career, so I left. It hasn't been all rainbows and butterflies, but my mind has been opened up to a greater space, more exotic technology and environments, and I'm now understanding a broader image of the market. 

For the sake of your future self, make sure that you pay attention to the market and make career decisions appropriately. Making your decision based on a technology you want to work on is one part, but don't forget to include whether that technology has an on-going place in the market - especially when such a large portion of tech compensation is based on stock or company performance. Stay true to you first, company second.


