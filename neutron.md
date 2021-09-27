---
layout: page
title: Neutron
---

Neutron is a distributed air quality testing platform. Originally this was born out of the desire to monitor the air quality in our own home, then the project expanded to do IAQ testing for homes as a service. 

I am working on building the platform as a part of 100 Days of Code.

### Neutron

Neutron is the central server running InfluxDB, CouchDB and some helper scripts.

### Neutrino

A Neutrino is a sensor node that runs a custom Python application to pull data from the environmental sensors on board and report that data back to the Neutron on network.

### 100 Days of Code

<ol start="0">
    <li><a href="/100doc-2021-day0/">Just Getting Started</a></li>
    <li><a href="/100doc-2021-day1/">Building a REST API</a></li>
    <li><a href="/100doc-2021-day2/">Persistent Storage, Error Handling</a></li>
    <li><a href="/100doc-2021-day3/">3D Printing, Day 1</a></li>
</ol>

### Details

A Neutrino goes through the following start process:

1. Connect to Neutron (CouchDB) and pull Neutrino configuration details
2. Assuming `customer != "default"` then test authorization to NeutronDB (InfluxDB)
3. After successful authorization to NeutronDB, begin polling sensor readings
4. Sensor readings every 10 seconds => Publish to NeutronDB 
5. Every 5 minutes, check for changes to customer assignment

When a Neutrino is assigned to a customer using the `/neutrino/<neutrino_id>` POST, a few helper functions update the customer entry to have the `neutrino_id` and then update the bucket authorizations to allow that Neutrino's token to write.

It appears that 15 second resolution readings result in 0.5MB of storage used each day per data point. One house worth of units should come to (12) Neutrinos, each with about 20 data points. 120MB per day worth of readings for a house or 3.6GB per month per house. I will eventually need to look into better ways of storing the data.