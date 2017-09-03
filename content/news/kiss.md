---
title: KISS
date: '2010-03-22T00:00:00+01:00'
tags:
  - keefox
  - KeeICE
  - KeePassRPC
  - news
---
<p>Who  doesn’t prefer the simple option? Software developers are no different  and security software is generally better the simpler it is so a  sensible rule-of-thumb is to always KISS whenever possible, that’s Keep  It Simple, Stupid! Therefore, I am pleased that in the past few weeks  I’ve been able to simplify the most crucial aspect of the way KeeFox  communicates with KeePass.
</p>
<p>The key change is that KeeFox now requires a new KeePass plugin  called KeePassRPC instead of the (now retired) KeeICE plugin. This new  plugin allows KeeFox and KeePass to communicate using a simpler language  than was previously possible and makes some features much easier to  implement. Most people won’t notice any difference but there are a  number of benefits: </p><ul><li>Simplicity (<a href="http://www.zeroc.com/ice.html" title="Go to http://www.zeroc.com/ice.html" target="_blank" class="externlink">ICE</a> is complicated, making connection problems difficult to fix) 	</li><li>Modifications to enable KeeFox to work in different environments  should be easier (e.g. JetPack add-ons, other Mozilla applications,  non-Windows operating systems) 	</li><li>A secure communications channel between KeeFox and KeePass should  now be possible (this communication never leaves your computer so the  practical risks of using unsecured communication are not as high as  might be feared but extra layers of security can only help) 	</li><li>KeeFox can continue to work with .NET version 2.0 (the new version  of ICE requires .NET 3.5 SP1 which is currently installed on about 25%  fewer machines than version 2.0) 	</li><li>The Mozilla add-ons review team will be able to scrutinise KeeFox faster and/or in more depth. </li></ul><p>Of course, choosing to abandon the KeeICE plugin was a painful  decision because it will delay the release of KeeFox version 0.8 and a  large proportion of the time I have spent getting KeeFox 0.7 working  reliably has been at least indirectly related to work on the KeeICE  plugin. However, I think that the benefits far outweigh the drawbacks so  ultimately the decision was the only sensible one I could take.
</p>
<p>There will still be a bit of a wait before the new KeeFox development  snapshot is ready, while I finish the migration to KeePassRPC and run   some basic functionality tests to reduce the chances of new bugs  creeping in.
</p>
<p>I think that in future, other applications will easily be able to  take advantage of the features that KeePassRPC offers. Look out for more  technical details on this website if you are interested in adding  further functionality to KeePass.
</p>
<p>PS: Just in case anyone was developing with the KeeICE server plugin,  let me know and I’ll help you either take on ownership of the KeeICE  source code or migrate your project to KeePassRPC</p>
