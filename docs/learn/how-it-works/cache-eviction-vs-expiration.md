---
sidebar_position: 4
sidebar_label: Cache eviction vs expiration
title: Cache eviction vs expiration
slug: /learn/how-it-works/cache-eviction-vs-expiration
description: Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache
---

# Cache eviction vs. cache expiration
The data lifecycle is one of the most important aspects of a cache management system. This page discusses the two means a cache does this, cache eviction and cache expiration, and then provides detail about how Momento Serverless Cache employs these concepts.

## What is cache eviction?
In general caching terms, eviction is when a cache write causes the aggregate data in a cache to exceed the available memory storage, and the cache must remove some data ("evict") to make room. For example, this evicted data could be data that is used less frequently, or another algorithm, depending on how the cache is configured. Some cache implementations evict data to perform maintenance windows.

## Momento Serverless Cache and eviction
Momento considers cache evictions to be a key indicator of service quality degradation. The service continually monitors this and will add capacity to maintain a buffer for all customers. The service level objective of Momento Serverless Cache is to respect the TTL for expiry of all cached items and not evict data.

Momento Serverless Cache has no maintenance windows. Operational changes such as scaling and node replacement are automatically handled in the background by the service. A prewarming process is used to avoid impacting cache hit rates. 

## Cache expiration
In general caching terms, expiration is when a time-to-live (TTL) value is part of each piece of data. When that time lapses, the service deletes the data from the cache.

See [Expire data from caches by setting Time-to-Live (TTL)](./expire-data-with-ttl) for specific information on how Momento Serverless Cache treats this topic.