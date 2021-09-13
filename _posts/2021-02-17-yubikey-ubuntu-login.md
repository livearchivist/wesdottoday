---
layout: post
title: "Yubikey for Ubuntu Login"
categories: 2FA
published: true
---

I've used Yubikeys for U2F Two Factor Auth for a long time. I've always wanted to use them as part of my login and `sudo` experience, but I've never spent the _literally five minutes_ necessary to set it up. 

I use an Ubuntu laptop for personal use and since it was time to wipe this bad boy and go upgrade to Ubuntu 20.04, I figured I'd go ahead and setup my Yubikeys too.

``` bash
sudo add-apt-repository ppa:yubico/stable
sudo apt-get install libu2f-udev
wget https://raw.githubusercontent.com/Yubico/libu2f-host/master/70-u2f.rules
sudo mv 70-u2f.rules /etc/udev/rules.d/
```

Now you'll need to reboot your system.

``` bash
sudo apt-get install libpam-u2f
```

Insert your first Yubikey (you have a backup key right?).

``` bash
mkdir -p ~/.config/Yubico
pamu2fcfg > ~/.config/Yubico/u2f_keys
```

Your Yubikey should begin flashing, touch the metal contact.

Unplug your primary Yubikey and the plugin your backup Yubikey.

``` bash
pamu2fcfg -n >> ~/.config/Yubico/u2f_keys
```

As with your first key, touch the metal contact when it begins flashing.

Congratulations, your two keys are configured. Repeat this step if you have three or more keys.

### Configuring for Sudo

``` bash
sudo vim /etc/pam.d/sudo
```

Add the line below after `@include common-auth`:

``` bash
auth	required	pam_u2f.so
```

Now open a new terminal and test the key:

``` bash
sudo echo test
```

Type your password, press `Enter`, then tap the metal contact on your Yubikey. If the terminal echos `test`, then you're good to go! Repeat this test process for each additional key.

### Configuring for Login

``` bash
sudo vim /etc/pam.d/gdm-password
```

Add the line below after `@include common-auth`:

``` bash
auth	required	pam_u2f.so
```

Now you'll need to tap the metal contact on your Yubikey after typing your password to unlock your machine.

### Configuring for TTY terminal

Last step!

``` bash
sudo vim /etc/pam.d/login
```

Add the line below after `@include common-auth`:

``` bash
auth	required	pam_u2f.so
```

### Closing

As you can see, setting up your Yubikey with Ubuntu is rather simple and you should absolutely do it today.