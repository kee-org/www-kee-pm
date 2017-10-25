---
title: Upcoming releases
date: '2013-08-18T00:00:00+00:00'
tags:
  - development
  - JSON-RPC
  - keefox
  - KeePass
  - KeePass API
  - KeePassRPC
  - linux
  - mac
  - mono
  - news
  - release
  - releases
  - security
  - snapshot
---
<p><h3>KeeFox 1.2.5b1 released</h3></p>
<p>Version 1.2.5 is nearly ready to be released so beta testers will soon be upgraded to this <a href="https://addons.mozilla.org/en-US/firefox/addon/keefox/versions/1.2.5b1" title="Go to https://addons.mozilla.org/en-US/firefox/addon/keefox/versions/1.2.5b1" target="_blank" class="externlink">new version</a> with a few small but important bug fixes:</p><ul><li>A fix for Thunderbird 25</li><li>A couple of bug fixes that caused some passwords to not save to KeePass</li><li>Danish, French, Korean, Portuguese and Russian languages created / updated (some not complete yet)</li><li>Fix for intermittent failed KeePass shutdown on Mono (Mac/Linux)</li><li>Some other small changes</li></ul><h3>Big changes in KeeFox 1.3 and 1.4</h3>
<p>Some big changes are coming to Firefox at the end of this year and we’ll be watching them as they develop over the coming month or two so that KeeFox 1.4 can continue to work beyond 2013. It could be an exciting opportunity to make some improvements to KeeFox so within a couple of months I’ll be posting a bit more detail about the changes and what we can all do to help.
</p>
<p>Before then, I’ll be releasing KeeFox 1.3 which contains just as many large changes but they are fairly invisible by comparison to the ones expected in KeeFox 1.4.
</p>
<p>KeeFox 1.3 contains support for keyboard shortcuts, context (right-click) menus and some big changes to the way that KeeFox communicates with KeePass.
</p>
<p>It’s the last change that I’m most interested in at the moment because of the security and usability implications of changes to this part of KeeFox.
</p>
<p>If you’re not technical, feel free to stop reading now but if you think you might be able to contribute a little time to review the current KeeFox 1.3 alpha release that would be very helpful.
</p>
<p>I’ve posted a draft of the new <a href="https://github.com/luckyrat/KeeFox/wiki/en-%7C-Technical-%7C-KeePassRPC-detail" title="Go to https://github.com/luckyrat/KeeFox/wiki/en-|-Technical-|-KeePassRPC-detail" target="_blank" class="externlink">communications protocol</a> to the manual so please start by taking a read through that. There’re also a few non-technical pages available in draft:<br> <a href="https://github.com/luckyrat/KeeFox/wiki/en-%7C-Technical-%7C-KeePassRPC" title="Go to https://github.com/luckyrat/KeeFox/wiki/en-|-Technical-|-KeePassRPC" target="_blank" class="externlink">KeePassRPC</a><br> <a href="https://github.com/luckyrat/KeeFox/wiki/en-%7C-Technical-%7C-KeePassRPC-%7C-Security-levels" title="Go to https://github.com/luckyrat/KeeFox/wiki/en-|-Technical-|-KeePassRPC-|-Security-levels" target="_blank" class="externlink">Security levels</a>
</p>
<p>Version 1.3.0a1 is currently available as an experimental build on the <a href="https://github.com/luckyrat/KeeFox/tree/1.3dev" title="Go to https://github.com/luckyrat/KeeFox/tree/1.3dev" target="_blank" class="externlink">1.3dev github branch</a>. Known issues include:</p><ul><li><strong>Several incomplete features make the build unsafe</strong></li><li><strong>Installing this build will probably prevent future versions of KeeFox (including later builds of 1.3.0) from working unless you delete your Firefox profile or make complex manual preference changes</strong></li><li>Only tested on Firefox 25 on Windows 7</li><li>No UI to manage authorised clients</li><li>No UI to change the keyboard shortcuts</li><li>Context menu implementation incomplete</li><li>First-time user experience not working</li><li>Connection establishment logic needs more work and maybe better notifications to users, especially for the edge cases when things go wrong</li></ul><p>If you come across anything else that’s a problem with either the specification or implementation of the new KeePassRPC protocol please <a href="https://github.com/luckyrat/KeeFox/issues" title="Go to https://github.com/luckyrat/KeeFox/issues" target="_blank" class="externlink">raise an issue on github</a> so we can discuss it further - note that no-one should be using this alpha version for sensitive data at the moment so don’t worry about responsible disclosure, etc.
</p>
<p>I’ll add a few of the above issues to github so if someone else wants to help out by implementing some of them, please keep an eye on the issues listed in the <a href="https://github.com/luckyrat/KeeFox/issues?milestone=7&amp;page=1&amp;state=open" title="Go to https://github.com..." target="_blank" class="externlink">KeeFox 1.3 milestone</a>.
</p>
<p>Over the next month or two I’ll be working on the remaining issues above, improving the documentation and generally working towards getting a beta version ready for the Autumn.</p>
