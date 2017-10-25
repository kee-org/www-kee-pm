---
title: KeeFox 0.9.3 released
date: '2011-10-25T00:00:00+00:00'
tags:
  - keefox
  - release
  - releases
  - news
---
<p>A new version of KeeFox has just been approved on the official Firefox add-ons site.
</p>
<p>This version supports KeePass 2.17 (and earlier). There are a few  other improvements too - full details are in the release notes for  version 0.9.3a on this page: <a href="https://addons.mozilla.org/en-US/firefox/addon/keefox/versions/" title="Go to https://addons.mozilla.org/en-US/firefox/addon/keefox/versions/" target="_blank" class="externlink">https://addons.mozilla.org/en-US/firefox/addon/keefox/versions/</a>
</p>
<p><strong>I recommend installing the updated version of KeeFox while  still running version 2.16 (or earlier) of KeePass. If you have already  upgraded to KeePass 2.17 you will need to “paste and go” this URL in  your location bar and click “Upgrade KeeFox”:<br> chrome://keefox/content/install.xul?upgrade=1</strong>
</p>
<p>A change was made to KeePass in version 2.17 which means that KeeFox  0.9.2 and earlier no longer work. Specifically, the KeePassRPC KeePass  plugin no longer loads (it gives an error message saying it is  incompatible with the new version of KeePass). This sort of plugin  incompatibility issue was supposed to have been eliminated with the new  “plgx” plugin format but there are evidently still a few edge cases that  can cause a problem and KeeFox was the unlucky plugin this time around.
</p>
<p>Dominik (the main developer of KeePass) has kindly agreed to try to  give me advance notice of future KeePass releases so emergency fixes  like this can be developed before the new KeePass version is made  publicly available. Neither me nor Dominik can make any promises but we  think the 2.17 upgrade problems are atypical of past and future KeePass  upgrades.
</p>
<p>Special thanks have to go to the addons.mozilla.org team  (particularly Jorge Villalobos) for fast tracking this new version  through their thorough and often lengthy review processes!
</p>
<p>Sorry for any confusion or inconvenience this may have caused you.
</p>
<p>NB: A few bits of text are “NOT TRANSLATED” for non-English users -  they shouldn’t be crucial to understanding the add-on and will be  replaced with correct translated versions as soon as possible. Sorry,  this decision was the lesser of two evils!</p>
