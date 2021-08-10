---
layout: post
title:  "Building Multi-Arch Docker Images on Gitlab.com"
categories: cicd
---

If you're like me, you develop a lot of things to test on Raspberry Pis (ARM) and then deploy to production on AMD64 processors. This is all well and good, if you don't mind spending time re-building the containers on each architecture, but I do mind. I want to write code, not deal with the back-end non-sense. 

I'm a big fan of Gitlab's CI/CD platform, so I figured there should be a good way to use it to get me to my goals. It turns out, it was pretty simple.

In the end, we'll be able to commit some code and Gitlab will build the Docker containers then push them to Docker Hub.

First, you'll need to log in to Docker Hub and create an Access Token `Username -> Account Settings -> Security`. While you're here, go ahead and create a repository for your docker images. You'll need the repo name later.

Now head over to your repository on [gitlab.com](gitlab.com) and add your Username and Access Key as Variables `Settings -> CI/CD -> Variables`. You'll want to create two variables with the following key:value pairs. I flagged my variables as Protected and Masked so they wouldn't show up in my CI/CD logs.

``` 
Key: DOCKER_USERNAME
Value: youruserhere

Key: DOCKER_PASSWORD
Value: youraccesstokenhere
```

Now you'll want to create a `.gitlab-ci.yml` file in your project and fill it in with the code below. The only thing you'll need to change is the very last line where you will want to replace `repo-name` with the name of your Docker Hub Repository. Commit and Push the new `.gitlab-ci.yml` file and in a few minutes you should see your Docker images in Docker Hub.

``` yaml
stages:
  - buildx
  - docker

buildx:
  image: docker:git
  stage: buildx
  variables:
    GIT_STRATEGY: none
  artifacts:
    paths:
      - buildx
    expire_in: 1 hour
  services:
    - docker:dind
  script:
    - export DOCKER_BUILDKIT=1
    - git clone git://github.com/docker/buildx ./docker-buildx
    - docker build --platform=local -o . ./docker-buildx

containerize:
  image: docker
  services:
    - name: docker:dind
      command: ["--experimental"]
  stage: docker
  before_script:
    - mkdir -p ~/.docker/cli-plugins
    - mv buildx ~/.docker/cli-plugins/docker-buildx
    - docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
  script:
    - docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
    - docker buildx create --use
    - docker buildx build --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push -t "$DOCKER_USERNAME"/repo-name:latest .
```

> This was adapted from [Auroria - Docker Multi Architecture Builds with Gitlab Runner](https://www.auroria.io/docker-multi-architecture-builds-with-gitlab-runner/) to include automatic uploads to Docker Hub.