---
title: Open Source
---

All Kee Vault security software is open source because this is the only safe way to develop security software. You, or technically capable friends and family, can review the code that will interact with your secret passwords to verify that it really does what we claim it does; there’s no need to implicitly trust any companies or individuals, in contrast to most other commercial password managers and web browsers like Google Chrome.

Open source software is well known to be more secure than closed source (proprietary) software so for something that you have to trust to safely store your passwords to your online and financial accounts, open source is the only sensible choice.

There are countless studies that prove this but many companies still hope that you don’t know about them. For a recent example, in 2018, critical flaws in the security of many widely used Samsung, Crucial and other disk drives were exposed, with the security researchers [proving](https://techcrunch.com/2018/11/05/crucial-samsung-solid-state-drives-busted-encryption/) that proprietary and closed-source cryptography is “often shown to be much weaker in practice” than open source cryptography.

The core principle actually dates back over 125 years and boils down to “security through obscurity is no security at all”, i.e. if your security relies on keeping the inner workings of your application secret it is likely that your security is already broken. You can [read more on this topic](https://en.wikipedia.org/wiki/Kerckhoffs%27_principle) in the fountain of all knowledge (and its associated scientific paper references).

## Where’s the source?

### Password manager components:

* Kee Vault browser app (version 1): https://github.com/kee-org/keevault
* Kee Vault Android app (version 2): https://github.com/kee-org/keevault2
* Kee desktop browser extension: https://github.com/kee-org/browser-addon
* All components, libraries and tools: https://github.com/kee-org/

### Infrastructure components:

Our infrastructure includes storage of already encrypted files, authentication to the Kee Vault service (not the encrypted data!) and various ancillary features such as secure messaging and billing integration.

Whilst we hope to eventually release all code Kee Vault Ltd creates, we currently don’t release code that runs on machines that are not owned by you. There are three reasons which justify this decision:

1. Your password security is only affected by the Password manager components listed above.
2. You can never have a guarantee that the code we claim is running on servers that Kee Vault connects to is in fact the same as that which is actually running there. This applies to all services hosted on the internet, not just ours, and is why we ensure that you can see from the client code that executes on your machine that no unexpected data is transmitted and that all transmission is performed in a secure manner.
3. The absence of the infrastructure code in a public location slightly increases the cost of the technical effort to clone the entire Kee Vault service. This allows us to continue focussing on improving the service rather than spending time and money pursuing legal enforcement, as well as reducing the dilution of funding that would occur if multiple near-identical services were to be launched in a short space of time.

This decision allows us to keep your subscription fees very low without detracting from the benefits you gain from the security-critical password management components being open source.
