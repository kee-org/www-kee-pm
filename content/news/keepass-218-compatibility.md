---
title: KeePass 2.18 compatibility
date: '2012-01-11T00:00:00+00:00'
tags:
  - .NET
  - development
  - JSON-RPC
  - keefox
  - KeePass
  - KeePassRPC
  - News
markup: HTML
---
<p>Thanks to everyone that notified me of the problems with the recently released version of KeePass.
</p>
<p>I hope to release a new version in 4-6 weeks with a beta available  within a few weeks. In the mean time, the existing version of KeeFox  will continue to work with KeePass 2.17. As with the previous  problematic KeePass upgrade, your upgrade route will be much simplified  if you continue using KeePass 2.17 until after you are running a new  version of KeeFox*. There are currently no known security problems with  KeePass 2.17 that necessitate an immediate upgrade.
</p>
<p>This time there were many changes to KeePass that prevented KeeFox  from working. I was notified of at least some of these changes in  advance of the release of KeePass 2.18 but did not have a development  environment to work and test with until after the official release last   week.
</p>
<p>I have identified a way to get KeeFox to work with 2.18 and most  users shouldn’t notice any differences but in light of the following  major changes to the KeeFox code I have decided to push the fix to  existing users quite cautiously - there’s no point in risking breaking  KeeFox for everyone just so that some people can run the very latest  version of KeePass.
</p>
<p>For anyone interested, the two major changes to the KeeFox code are:<br> 1) I’ve upgraded (and then customised) the Jayrock JSON-RPC server bundled within KeePassRPC<br> 2) I’ve set .NET 4 as the default runtime for KeeFox users who don’t yet have a copy of .NET installed
</p>
<p>This work required an upgrade to Visual Studio 2010 and I took that  opportunity to make a clean break from the existing SVN revision control  at Sourceforge; KeeFox code is now available on github, details will  be announced in the coming weeks.
</p>
<p>* Or at least downgrade to 2.17 before installing the new version of KeeFox.</p>
