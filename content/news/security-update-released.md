---
title: Security update released
date: '2016-11-21T00:00:00+00:00'
tags:
  - development
  - keefox
  - KeePassRPC
  - news
  - release
  - releases
  - security
markup: HTML
---
<div><div>
<p>All KeeFox users should update to version <a href="https://addons.mozilla.org/en-GB/firefox/addon/keefox/versions/1.6.4" title="Opens external link in new window" target="_blank" class="external-link-new-window">1.6.4 <span class="glyphicon glyphicon-globe"></span></a> (or <a href="https://addons.mozilla.org/en-GB/firefox/addon/keefox/versions/1.6.4b1" title="Opens external link in new window" target="_blank" class="external-link-new-window">1.6.4b1 <span class="glyphicon glyphicon-globe"></span></a> if you are a beta tester). For most users, Firefox will do this for you automatically.
</p>
<p>Both the Firefox addon and KeePass plugin will need to be updated. The button on the KeeFox setup page should update the KeePass plugin for you if you're on Windows but otherwise just manually copy the KeePassRPC.plgx file to the KeePass plugins folder as with most KeeFox updates.
</p>
<p>Many thanks to Achim for disclosing the issue described below responsibly and helping to keep everyone safer.<br><br>
</p>
<h3>What if I don't update?</h3>
<p><br>A vulnerability exists in all earlier versions of KeeFox which can be exploited by malicious websites in order to extract the username and password for targetted websites.
</p>
<p>A typical exploit path for this vulnerability would be via a phishing attack. For example, if you click on a link that claims to be www.ebay.com but is actually a malicious site, that site could have been designed to automatically capture your www.ebay.com password. The normal behaviour in this situation would be for KeeFox to ignore any login form on that fake ebay page and you would only surrender your password if you were to manually type or paste it into the website.
</p>
<p>&nbsp;</p>
<h3>What else can I do?</h3>
<p><br>The only way to completely protect yourself from this vulnerability is to update to the latest version of KeeFox but there are steps you can take to minimise the impact of this and other types of security vulnerability.</p><ul><li>Wherever possible, enable 2nd factor authentication on your important website accounts (e.g. SMS message codes or physical "one time password" token generators)</li><li>Don't trust links sent to you unsolicited (e.g. via email or text message)</li><li>Use different passwords for every one of your accounts</li></ul></div></div><div><p>You could also disable the KeeFox Auto-Fill functionality in versions earlier than 1.6.4. Since that is a large part of what makes KeeFox useful, for most people this won't be the best approach.
</p>
<h3>Do I need to change the passwords stored in KeePass?</h3>
<p><br>You should already be following best practice of changing account passwords occasionally and for many users, continuing with this practice should suffice. If you feel that you may have been targetted by a phishing attack or are concerned about the security of particularly sensitive accounts, you may feel more comfortable after changing those account passwords.
</p>
<p>There is no evidence that this security vulnerability has been maliciously exploited but the nature of the vulnerability is such that we would not necessarily expect to know when or if it that has happened.<br><br></p></div><div><h3>What fix is included in KeeFox 1.6.4?</h3>
<p><br>There are two related vulnerabilities that existed because of a combination of three issues.</p><ol><li>KeeFox asks KeePass to search for passwords on pages whose URL (address) starts with "data:"</li><li>KeePassRPC has special handling of URLs that start with "file://" but this handling contains a bug.</li><li>KeePassRPC gives priority handling to any Regular Expression matches you have configured on your KeePass entries (this is an advanced feature - you'll know if you use it so don't worry if you don't understand what it means).</li></ol><p>The combination of issue 1 with 2 or 3 can trick KeePassRPC into thinking it is being asked for the password for a different website address than the one you are visiting in Firefox.
</p>
<p>The first issue is fixed in 1.6.4. Although fixing just that issue would probably suffice, to add further protection against other unforeseen but related issues, KeePassRPC will now also ignore all URLs that start with "data:" so the other two issues are no longer a concern. The bug in issue 2 has also been fixed to add a further layer of protection against unknown future vulnerabilities.</p></div><div></div><div><h3>Is Thunderbird affected?</h3></div><div><p>The issue relates to web page forms which are not typically auto-filled in Thunderbird. I'm not certain that it can never happen though. In any case, if you use KeeFox with Thunderbird and Firefox, you'll need to keep the versions the same so you should upgrade to 1.6.4 anyway.</p></div><div></div><div><h3>Are other Firefox derivative browsers affected?</h3></div><p>Yes. KeeFox has often been usable with other non-Firefox browsers although this has never been officially supported. If KeeFox 1.6.4 works with your Firefox derivative of choice, you should install 1.6.4 now. If your derivative of choice has branched too far from Mozilla Firefox, you should either select a new browser or stop using KeeFox. You should be wary of using any version of KeeFox older than 1.6.4 from this point on.</p>
