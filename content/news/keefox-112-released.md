---
title: KeeFox 1.1.2 released
date: '2012-10-09T00:00:00+00:00'
tags:
  - development
  - keefox
  - KeePass
  - linux
  - mac
  - mono
  - news
  - release
  - releases
  - snapshot
---
<p>The  recently released KeeFox 1.1.2 contains dozens of new and improved  features and a few important bug fixes, the highlights are below.</p><ul><li>Multiple database support. Seamlessly work with more than one KeePass database thanks to these improvements: <ul><li>Logins from all open (unlocked) databases are matched (and automatically filled / submitted depending on your configuration)</li><li>Logins from all open databases are listed on the Logins toolbar button</li><li>A new login can be saved into any open database</li><li>Changing databases from within KeeFox is now reliable and predictable</li></ul> </li><li>Improved form matching accuracy: when KeeFox knows how many form  fields to expect for an entry it will now use that information to help  select the correct form on a page</li><li>Instant edit feature added: Review and edit every entry that KeeFox saves (disabled by default).</li><li>Memory leak fixed: This will be a big improvement for heavy Firefox  users who do not shutdown Firefox for days or weeks at a time</li><li>Added option to require more accurate URL matching for specific  entries (previously possible through a hidden KeePass “advanced string”)</li><li>Thunderbird support (in beta testing)</li><li>Improvements to setup instructions, especially for non-admin users and Mono (Mac &amp; Linux) users</li><li>First-run improvements (e.g. automatic save of your first KeePass  database and a link to information about importing existing passwords)</li></ul><p>You should get 1.1.2 pushed to you automatically unless you have  disabled Firefox add-on automatic updates. You can manually install it  from the <a href="https://addons.mozilla.org/en-US/firefox/addon/keefox/" title="Go to https://addons.mozilla.org/en-US/firefox/addon/keefox/" target="_blank" class="externlink">main Add-on page</a>.
</p>
<p><strong>Known limitation</strong>: Newsgroup authentication prompts in Thunderbird do not work with KeeFox.
</p>
<p><strong>Apple Mac support</strong>: The immaturity of the Mono  platform that Mac users require to make KeePass work is keeping KeeFox  Mac support in beta testing for the time being. You can install the  development version if you’d like to give it a try (it seems to mostly  work if you have some patience and know what you’re doing)
</p>
<p><strong>Known bug</strong>: Shortly after the release of 1.1.2 I  learnt that users who enable the Firefox master password (for use by  other add-ons, Firefox Sync, etc.) sometimes experience problems  entering the master password when prompted before Firefox has completely  started. I have put a fix into version 1.1.3 which you can download  from here: <a href="https://github.com/luckyrat/KeeFox/blob/0840257ee7e2d6fdf6ac908cc0209058d79301bb/XPI-package/latest.xpi?raw=true" title="Go to https://github.com/luckyrat/KeeFox/blob/0840257ee7e2d6fdf6ac908cc0209058d79301bb/XPI-package/latest.xpi?raw=true" target="_blank" class="externlink">https://github.com/luckyrat/KeeFox/blob/ … d79301bb/XPI-package/latest.xpi?raw=true</a>.
</p>
<p>1.1.3 is an <span style="text-decoration: underline">experimental build</span>  - although it has very few changes since the well-tested 1.1.2 it has  not been thoroughly tested itself so I advise only installing it if you  need to. I’ll monitor its usage and consider releasing it as an official  tested version if it looks like enough people are affected by this bug.
</p>
<p>I’ll be starting work on version 1.2 in a few weeks time so do let me know through the <a href="help/forum" title="Go to http://keefox.org/help/forum" class="externlink">support forum</a> if you find any bugs that I should be working on for that release. In the mean time, enjoy version 1.1!</p>
