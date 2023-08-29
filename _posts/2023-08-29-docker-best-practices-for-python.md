---
layout: post
title:  "Docker/Python - Best Practices"
date:   2023-08-29 08:52:11 -0400
categories:
  - Tech
published: true
mermaid: false
---

Just like with my [`ssh`](/ssh) page, I like to take notes for myself to make re-doing projects easier down the road. Today, I want to note some real quick Docker best practices for a Python application. 

## Best Practices

``` Dockerfile
FROM python:3.10-slim@sha256:cc91315c3561d0b87d0525cb814d430cfbc70f10ca54577def184da80e87c1db
WORKDIR /usr/app

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .
CMD [ "python", "app.py" ]
```

You'll see in the file above that we very explicity define the image we want, that way we know it won't break. 

After that we set the working directory, nothing really to see here.

Next, you'll see that we only copy over `requirements.txt`, meaning if the requirements haven't changed, it will skip re-installing everything if you happened to change some other code in your app. 

Then we copy everything else in the directory into our `WORKDIR`. This will include all libraries and code that are necessary to run our app. 

Finally we run the app, easy as can be. 

> Note: There are some snags if you want to use multi-stage builds, but I currently have no need for that. If I do run into it, I'll update here. 