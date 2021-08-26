---
title: Multi-what?
date: '2015-06-02T00:00:00+00:00'
tags:
  - development
  - keefox
  - news
  - security
markup: HTML
---
<div><div><div><div><div><div><p>Version 1.5 of KeeFox is not far away. Along with a lot of new features and improvements which will be announced soon, there is a very large hidden change which is necessary because of a large change to an upcoming Firefox version.
</p>
<p>I expect Mozilla will mention this when the new Firefox is released but it is a technical change which is designed to mostly go unnoticed.
</p>
<p>You don't need to know this to use Firefox or KeeFox but I thought some people might be interested to know a little bit about the change.</p></div><div></div><div><h3>Current situation</h3></div><p>Firefox essentially mixes together computer programming code from:</p><div><ul><li>Firefox itself</li><li>Add-ons like KeeFox</li><li>Websites</li></ul><p>That code all goes into a single <span style="font-style: italic;">process</span> which makes it relatively simple to write an add-on because it can directly access any part of Firefox and all the websites you visit.
</p>
<p>The diagram below shows the two processes (blue boxes) that current KeeFox versions have to worry about - one is the Firefox process mentioned above and the other is the KeePass process that stores your passwords.</p></div><div><div><p><img src="/img/KeeFoxPree10s.png" alt="KeeFox within single-process Firefox" class="center" height="552" width="500" style=""> </p></div><div><p>The icon in the top right demonstrates 4 points you can interact with: KeePass, KeeFox (e.g. the main KeeFox panel), Firefox itself and the web page you have loaded in Firefox.
</p>
<p>The 3 different places you can interact with the Firefox process are examples of the 3 types of code listed above.
</p>
<p>Thin arrows are relatively simple (e.g. clicking a mouse button or fairly simple sections of code) but fat arrows represent something more complicated.</p></div><div><h3>How and why Firefox will change</h3></div><div><p>The current situation is fairly easy to understand I hope, but there are disadvantages to this simple, single-process approach. The main ones include:</p></div><ul><li>Programming mistakes are more likely to result in serious security problems.</li><li>Firefox can stutter or even freeze while a website (or addon) runs some slow and complicated code.</li><li>If one website crashes, the whole of Firefox also crashes.</li></ul><div><p>To remove (or at least reduce) these limitations, Firefox is soon going to change from single-process to <span style="font-style: italic;">multi-process</span> as a result of a roughly 6 year project called Electrolysis (e10s). This should mean that the Firefox of 2016 is more stable, feels faster and is more secure.
</p>
<p>The image below shows how KeeFox 1.5 fits into multi-process Firefox.</p></div><div><p><img src="/img/KeeFoxPoste10s.png" alt="KeeFox within multi-process Firefox" class="center" height="465" width="800" style=""> </p></div><div><p>See how you now access different processes (blue boxes) when clicking or typing into a website compared to the rest of Firefox?
</p>
<p>KeeFox has to do a similar thing so there are now essentially two isolated parts of KeeFox, only connected by that new fat arrow. It's the creation of this arrow and the changes required to split KeeFox into two parts which has taken most of my spare time for the past 6 months, but this new approach has allowed me to develop many other improvements for KeeFox 1.5 that I hope you'll agree are worth the wait.
</p>
<p>Since each individual process is kept separate from all other processes by standard features offered by Windows (or your operating system), this results in greater protection from stability and security bugs.</p></div><div><h3>Summary and next steps</h3></div><div><p>Firefox will soon use multiple <span style="font-style: italic;">processes</span> and KeeFox 1.5 contains the necessary changes to work with the new Firefox.
</p>
<p>Some old versions of add-ons can actually work properly in the new Firefox without requiring any changes but many (like KeeFox) will have to be updated before the new Firefox is released. So if you see problems with other add-ons, this article can indicate where the problem lies (they've not built that big fat arrow yet!)
</p>
<p>The exact release dates for Multi-process Firefox is subject to change but it's currently scheduled for the last couple of months of 2015. I hope to have a stable version of KeeFox 1.5 ready within two or three months (but as usual, it could be a similar length of time before Mozilla tick the box to say it can be released to you as an automatic update).
</p>
<p>You can already try out Multi-process Firefox by installing the <a href="https://www.mozilla.org/en-GB/firefox/developer/" title="Learn about and download Firefox Developer Edition" target="_blank" class="external-link">Firefox Developer Edition</a> and Mozilla will also run a beta testing period later this year.
</p>
<p>An experimental build of KeeFox 1.5 is now available from github but I advise against installing it unless you are technically capable and use the Firefox Developer Edition as a matter of course. For everyone else, <a href="download" title="Opens internal link in current window" class="internal-link">installing  <span class="glyphicon glyphicon-link"></span></a>the current beta version of KeeFox will ensure you get an automatic upgrade soon, albeit with the risk of a few rough edges and a lack of relevant documentation.
</p>
<p>I'll announce the improvements coming in KeeFox 1.5 on this site once we're comfortably into the beta testing period.</p></div></div></div></div></div></div></div>
