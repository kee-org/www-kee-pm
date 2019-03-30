---
title: Why Beta?
---

Whilst we are already confident in the security of Kee Vault, which comes with the highest possible levels of privacy and security by design, there are a variety of known issues that may make your experience less than perfect.

We've released to the public now because we think that many people can benefit from the app without any of these issues impacting them. For others, the impact could be more noticeable or even enough to make the app unsuitable at the moment.

We ask that you are patient if you need some of these issues to be resolved before you can use Kee Vault. In some cases we'll be able to make improvements within a few months but some will take longer, and all will take less time if enough people subscribe that we can increase the size of the development team.

This page outlines the most notable issues we're aware of when launching the beta version. We'll update it sporadically as required but won't include every short-term bug or planned feature improvement here - you can check out our issue tracking list elsewhere for all the details if you are interested.

## We can't yet be certain that we will be able to perform maintenance and improvements without causing some disruption to existing users

Our aim is to ensure that all new features and bug fixes can be automatically provided to you smoothly. Additionally, any disruption to our remote service should have zero impact on your ability to access your passwords. Our architecture is designed to ensure that this is possible but at this relatively early stage of development we don't have the track record to be sure that we'll be able to avoid all rough edges.

Sometimes the workaround for these kinds of problems might be to "turn it off and on again" by refreshing your web browser.

## Some source code is newly released

A part of the benefit of using an open source security product is that other experts can review the exact code that will be keeping you secure. It is therefore unavoidable that when new apps are first released, they will not experience this benefit immediately.

## Changes to your Vault from multiple locations in a short space of time may fail

Changes to your vault on one device may take up to an hour to appear in other devices that you are also logged in to. In most cases changes made in multiple places will be automatically synchronised but there is a small risk of data loss if you make changes to the same login entries within this time frame. We plan to reduce the time frame of this risk to just a few seconds in future but in the meantime you can work around the issue by either:

* avoid making changes to your vault from different locations within a short timeframe
* reload and re-login to the app on the 2nd and subsequent devices if you need to make changes within an hour of doing so on a different device.

## Settings sync can be slow, sometimes losing the latest change

Kee Vault and browser extension settings that the app needs to synchronise across multiple devices can be delayed in some cases, potentially resulting in the very new version of the settings being lost. This could be especially problematic in the case of a very lengthy period of offline usage.

You can work around this by ensuring you save your Vault before going offline and making no changes to settings while offline.

## Opening some Vaults can be slow

This is especially the case on mobile devices and with Vaults that contain hundreds of entries or have relatively weak master passwords.

You can work around this by checking in the settings for your Vault that you have a secure enough master password that the password security boost can be safely set to "Very low".

## Attention to detail

The visible parts of Kee Vault, while generally functional, do not always demonstrate the same attention to detail that our underlying technology benefits from. Various graphical design, interface and language improvements are needed before we are happy to say it's good enough for a first release.

## Documentation and support

We're working hard to develop any required documentation and improve the quantity and quality of our customer support but at this early stage we're mostly interested in learning what pain points you experience so that we can focus on those first. Please [join our community forum](https://forum.kee.pm) to help us understand how you'd like Kee Vault to improve!

## Invalid metadata

Form field DOM attribute IDs and names in Vaults created before 30th March 2019 may have missing (or even more rarely, incorrect) values, potentially reducing form filling match accuracy when multiple entries are available for a given website.

If your Vault was created during this part of the beta testing period and you find that some Kee browser extension form filling accuracy is not good, especially if worse than the KeePass entry you imported from, it would be wise to either re-import the entries from KeePass, or if widespread changes have already been made since the import, consider using the history feature to revert individual entries if they have ended up with an incorrect form field configuration.

The root cause of this bug was a misunderstanding of two magic parts of the Backbone.js library. A couple of other similar mistakes have been fixed at the same time, thankfully before they could have any impact.
