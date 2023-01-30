---
layout: post
title:  "Technical Product Strategy, Pt 2"
date:   2023-01-30 08:52:11 -0400
categories:
  - Career
  - Product Strategy
published: true
mermaid: true
---

Back in October I wrote [On Being a Technical Product Strategist](https://wes.today/on-being-a-technical-product-strategist/), where I discussed the need for someone who focuses on the holistic view of **technical product strategy**. This person (or more likely group of people) would bring a long history of technical experience, cross-functional work history, and be well connected in the industry - so they can take input from a number of different perspectives and distill it into a product strategy that meets their customer's needs. 

If you're a vendor who is trying to meet the ever changing technical landscape, and you're doing it in a vacuum (mostly from internally derived product roadmaps), you're going to develop things that don't meet customer's needs. Then you are going to market things that customer's don't need. When the product isn't moving as fast as wallstreet would like, you'll change your sales comp model to push that product out the door because it isn't moving naturally. Sound familiar?

A function like **Technical Product Strategy (TPS)** should be able to build recognition and trust inside the business unit that they operate within, the company they operate within, and the industry that they support. They should be able to build relationships with and become trusted advisors to their customers (internal and external). Without the ability to build this trust and authority organically, they will not be seen as a valuable function and will make little difference in the company. This function should also have a certain level of _"paper authority"_, where they're able to influence product direction with the support of leadership. 

## Structure

Deciding where the Technical Product Strategy function should live largley depends on the organization, but for most tech vendors, it should live inside of the Product organization, reporting to the Head of Product, or Business General Manager/Exec, alongside Product Marketing, Product Management, and Engineering. Living inside of the Product organization makes them peers to those who they need to influence, giving them the ability to build tight relationships without additional stress. 

Putting a function like this inside of a Sales Organization would be a mistake, because the numbers should follow successful product strategy, the strategy should not be solely dictated by Sales Numbers, Sales Strategy, or from the input of the greater sales organization because you'll lose fidelity in the data, leading to the _Faster Horse_ issue we'll talk about later. 

On top of the structural issues that would present if TPS lived inside of Sales, you could also run into a political one. Depending on the organization, Engineering may view sales as a lesser entity, solely driven by compensation and revenue. Often, this perception is not wrong, because so many organizations have been driving product sales by changing how sales teams are compensated, in order to move a product that customers don't necessary want, but may buy if their sales team pushes hard enough.

Below is a diagram of where I envision the TPS function sitting inside of an organization and the inputs they would use into their overall strategy:

<div class="mermaid">
graph LR
    A(SRE / Support) <--> B((Technical \nProduct Strategy))
    A <--> C(Customer-side\nLeadership & Engineering)
    C <--> D(Customer Success)
    C <--> B
    D <--> B
    E(Executive Staff) <--> B
    K(Competitive) <--> B
    F(Product Marketing\nTME & Product Mgmt) <--> B
    B <--> G(Industry Trends,\nInfluencers, Thought Leaders,\n and Analysts) 
    B <--> H(Services & Delivery)
    B <--> I(Sales & \nSales Engineering)
    B <--> J(Engineering)
    F <--> J
</div>

## This Function Already Exists... Sorta

You could argue that this function, Technical Product Strategy, already exists inside of Product Management and or Customer Success, and you would be mostly correct, but those functions have other deliverables that will hamper their delivery of a technical product strategy that meets what the customer, company, and industry wants and _needs_. Let's dive into _why_ the existing functions don't provide the full picture. 

### Product Management

Product Managers are in charge of the product roadmap for any particular product, feature development and prioritization, and resource allocation in conjunction with the Engineering Leaders in the company. The problem with relying on PMs to drive Technical Product Strategy is they often get bogged down in wading through BUGs, FEATs, and customer presentations, not to mention that they will often not have the time to pop their head up for a breath of fresh air to make sure the [industry doesn't leave them behind](https://wes.today/dont-let-the-industry-pass-you-by/). 

The TPS function would strip away BUG management, customer presentations of product roadmap, and direct roadmap development, leaving room for more industry, engineering, and customer input, giving them the time to distill the information and really put together a _North Star_ for the development of a product.

The TPS function would then integrate tightly with Product Management to ensure that the proper features get developed, while allowing the PMs and Engineering Leadership to align the feature development against bug fixes and resource constraints. There will be technical (and non-technical) dependencies in the process, which is why a technical background for the TPS function is an absolute requirement and will relieve stress between Product Management, Engineering, and Technical Product Strategy. 

### Customer Success

Customer Success usually has a very clear mission, **make the customer happy**. Often that comes with a lot of follow through on support cases, implementation health, customer feedback gathering, and a fairly strong integration with the assigned sales team. Often Customer Success will get involved to ensure that renewals are planned for and happen, that customers are using the features they've paid for to the best of their abilities, and they will also work with Product Managers to open BUGs and prioritize new features that are important to the customer. 

One thing you probably noticed in that description is that they are 100% the voice of the customer into the depths of the vendor organization, ensuring that the customer feels heard and is successful in using the product they purchased from said vendor. The other thing to note is 99.999% of their work is done post-sales, so that means the world that they operate in doesn't usually take into account the sales pipeline and how someone goes from just simply having a tracking cookie in their browser to purchasing a product.

TPS needs to account for all portions of the Sales Pipeline, including the marketing that leads to them even getting an initial cookie dropped onto their browser. How do we build a product that meets the needs of a customer to the point that they want to go to our website to learn more? How to we convert them from a website visitor to someone who has entered the pipeline?

Customer Success can provide extremely valuable information into the TPS function, but they cannot be the sole owners of the function.

## Who

So after all of this, who makes a great technical product strategist? 

It's unlikely a single person would meet all of the requirements of what makes a great technical product strategist, but rather the goal should be to build a small, highly-effective team of individuals that cover most of the key needs of a TPS team.

- [REQ] Technical Background - A TPS should have a highly technical background, where they have operated on the customer side as an architect or engineer, and/or worked inside of a vendor organization as a TME, SE, or SRE. 

> Note: I do not believe that the person should be required to have direct industry experience for the sector the company serves. Rather, they are able to grasp technical issues at a reasonable depth in order to make good decisions and communicate with other people who may be experts in that field.

- [REQ] Connected and Trusted in the Tech Industry - The person should be connected to the broader tech industry and stay up to date on trends, up and coming technologies, and the pains that the industry is trying to resolve. They should have trusted connections to peers inside of partner, competitor, or customer organizations, be familiar with influencers and thought leaders, in order to help them develop a fuller picture of the industry.
- [REQ] People Skills / Empathy - Anyone who operates inside of a TPS organization should feel comfortable in talking directly with anyone inside of the industry: customers (from Engineering to Leadership), internal engineering and leadership, influencers, analysts, peers, and media. Being able to build trusting relationships through empathy is a key factor in being a successful TPS.
- [REQ] Understanding of Product Development (including marketing) - A TPS should have a deep understanding of all of the stake-holders involved in the development of a product. They should be able to identify where gaps exist inside of a product and go to the right folks in order to develop a plan to remedy.
- [OPT] Direct Skillset - Having a direct skillset that applies to the technical deliverable of the product is helpful, but definitely not required. It helps the individual establish a level of trust in the industry and with customers faster, but doesn't necessarily mean they will be successful.
- [OPT] Public Speaking - A Technical Product Strategist is someone who is likely to end up on stage at conferences to talk about a company's product strategy, specifically on the problem that the product is trying to solve, and how the product [intends to] solve it.
- [OPT] Understanding of Technical Sales Process - understanding how to take a random person on the internet through the sales pipeline (or funnel), is extremely valuable as a TPS, but is also something that can easily be taught in the role.
- [NR] Schooling/Certification - TPS is a role that is built on top of an already successful career inside of the tech industry. As such, traditional higher education and certification is not an expectation in the role. 

If you have a CV that covers a few of these requirements, you should consider yourself a canditate for a role like Technical Product Strategist - but your thought process is more important than your career history. How do you think about the industry? How do you distill all the noise out there, connect yourself to the trends that will succeed, and then communicate that information effectively to the people inside and out of your company?

## On Building a Faster Horse

One of the traps you will run into when building a function like Technical Product Strategy is that if you don't balance your inputs right or hire the right folks to run a function such as this, then you'll end up **building a faster horse** - instead of a car. It's common lore that Henry Ford was reported saying that if he listened to what customers wanted he would have built a faster horse, but no one has been able to directly attribute this quote to him. More likely, it was attributed to Ford, because he had a clear ["tone-deafness"](https://hbr.org/2011/08/henry-ford-never-said-the-fast) to what his customers wanted, which lead to Ford struggling to keep up with competitors in the late 1920's.

> _Note:_ I'm taking great care to ensure that customer input is directly included in the Technical Product Strategy process, because no one knows their own needs better than the customers. Customers though, can be behind the trends or where the industry is heading, and by solely taking their input in the design process while eschewing outside input could lead to you developing the wrong product or missing the market opportunity entirely simply because you were too late. 

Solely building product based on customer input is also why it would be a mistake to put this function in sales, since sales would be heavily loaded on the customer input side, but less on the industry trends and greater product team thought processes. _Companies are going to need to step out of their internal feedback loops and think about the bigger picture, not dictate the bigger picture, going forward._

## Competitive Intelligence

A lot of companies spend significant time and effort ensuring they keep up with the competition in features and product coverage. When you start thinking about developing a product with the methodology I've laid out in this post, then you'll start to see that you can't solely chase feature-to-feature parity with your biggest competitor, because it's not entirely likely that they're building things that customers are asking for. 

It's important to understand how your competition's products work, but you can't let it be a major input into your technical roadmap. Your technical roadmap your should be developed with all of the inputs shown into the diagram above.

## Conclusion

Getting into speeds and feeds competitions, building features solely because your competitor has them, or continuing iteration on the product as it stands, are not recipes for success in the tech industry. We need a way to step outside the box, influence our internal organizations, and build products that acutally matter. We're living in a world that is filled with waste. Waste in energy and resources (physical, mental, and financial), most often that waste creates and solves nothing. Our industry has an opportunity to become much more effective, do things that matter, and stop wasting people's valuable time and resources on shelfware. Packaging exercises are a bandaid on a gunshot wound, the problem lies in the overall strategy of the product, not how a customer is consuming it.

Vendors in the tech industry spend Billions of dollars on product development, markeing, sales, and many other functions, often ending up in certain portions of the business that don't succeed or developing features for a product that no one ends up using. Software Engineers hate building products that people don't use, marketers have a hard time building funnel on a product that just doesn't land, and sales teams have to be pushed in unnatural ways to move a product that doesn't resonate with the customer - but yet we keep approaching things the same way. I believe that Technical Product Strategists could fill the communications and priority gaps that exist in the traditional vendor org chart and help build products that customers love and need.