---
title: Security documentation update
date: '2016-10-18T00:00:00+00:00'
tags:
  - KeePassRPC
  - KeePass
  - keefox
  - linux
  - mac
  - mono
  - security
  - news
---
<p>A small omission has been found in the KeeFox documentation which explains the different ways that you can protect the connection between Firefox and KeePass. It's not a serious problem but since this may have guided some people's choice of KeeFox configuration, I wanted to post a quick explanation of the situation.
</p>
<p>Firstly, thanks to <a href="https://github.com/lhernanz" title="Opens external link in current window" target="_blank" class="external-link">lhernanz </a>for bringing this to our attention.
</p>
<p>If your computer runs Microsoft Windows you can stop reading now - this only affects users that use KeePass on Linux, Mac and other Unix operating systems.
</p>
<h3>What's the problem?</h3>
<p>The "medium security" protection offered by KeePassRPC as described in the <a href="https://github.com/luckyrat/KeeFox/wiki/en-%7C-Technical-%7C-KeePassRPC-detail#connection-security" title="Opens external link in current window" target="_blank" class="external-link">relevant documentation page</a> is designed to offer a layer of protection to the secret information that KeeFox uses to secure the messages that pass between the Firefox and KeePass applications on your computer.
</p>
<p>This is the default security protection for all KeeFox installations because it offers a good balance between convenience and security.
</p>
<p>Until today, the documentation explained that this secret information was encrypted when KeePass stored it on disk. Unfortunately this is only the case for Microsoft Windows users. On Mac, Linux and Unix machines this information is stored in special files which are protected only by standard file system permissions.
</p>
<p>Note that to encrypt the secret information completely, you also have to take the extra step to enable the Firefox master password feature.
</p>
<p>Also note that unless you have other serious security problems with your computer, the protection level of the messages between KeePass and Firefox should have no impact on the security of your passwords and personal data.
</p>
<h3>Why did this go unnoticed for so long?</h3>
<p>KeePass (and by extension KeeFox) relies on the Mono framework on non-Windows computers. The Mono documentation for the relevant security feature states: "There is partial support for ProtectedData and ProtectedMemory on Mono. On Windows Mono will use DPAPI (Data Protection API) for increased interoperability, while it will use its own implementation on other operating systems."
</p>
<p>I incorrectly assumed that "its own implementation" referred to a working and secure implementation - it does not.
</p>
<p><span style="font-weight: bold;"><span style="text-decoration: underline;"></span></span>
</p>
<h3>Should you take any action?</h3>
<p><span style="font-weight: bold;">Reminder: Only users of Linux, Mac or Unix systems need concern themselves with this section.</span>
</p>
<p>If malicious local users, generic data harvesting malware running on your machine or offline physical disk access are threat vectors you are concerned about, you might want to rethink whether the medium security protection is sufficient for your needs now that this new information has come to light.
</p>
<p>You might want to either:</p>
<p><ul><li>Switch to using High security mode - note that this will prevent the secret information being stored at all so you will have to re-authorise the link between Firefox and KeePass every time you restart them.</li><li>Consider enabling full disk encryption (but honestly, while this is a good idea in general, this specific issue alone is incredibly unlikely to justify this step).</li><li>Verify that the ACL configuration for your Mono installation is correct. I'm afraid I can't offer help with this but bear in mind that Mono already has protections against the keys being accessible to all users; take care if making changes in this area - it's easy to destroy your Mono package if you don't fully understand how this works.</li></ul></p>
