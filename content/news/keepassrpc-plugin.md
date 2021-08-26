---
title: KeePassRPC plugin
date: '2010-03-24T00:00:00+00:00'
tags:
  - KeePassRPC
markup: HTML
---
<p>KeePassRPC  provides a remote access interface for KeePass Password Safe 2. There  is currently no official release but you can view the source code in the  <a href="http://keefox.svn.sourceforge.net/viewvc/keefox/trunk/KeePassRPC/" title="Go to http://keefox.svn.sourceforge.net/viewvc/keefox/trunk/KeePassRPC/" target="_blank" class="externlink">KeeFox repository</a>. The most interesting files are: </p><ul><li>DataExchangeModel.cs 	</li><li>KeePassRPCService.cs 	</li><li> KeePassRPCServer.cs </li></ul><p>I’ll publish an more in depth introduction to those files soon.
</p>
<p>The RPC system is an implementation of JSON-RPC; this is a simple  protocol and probably does not support every possible desired feature  but clients are easy to implement and libraries already exist for most  programming languages.
</p>
<p>Communication with the RPC server is currently via direct unencrypted  TCP socket connections only. In future, I intend to add support for TLS  encrypted sockets. It would also be possible to add a HTTPS server or  even an alternative RPC protocol with the same API (e.g. XML web  services). Although I think that a single plugin with a standardised API  would be beneficial for KeePass plugin developers and users, we would  need to avoid adding too many alternative access methods - a couple of  protocols and a couple of transport mechanisms are probably OK though?
</p>
<p>The API will experience minimal changes over the next few months  because I need it to remain stable in order to ensure that version 1.0  of KeeFox can be released with well-tested components. As the release of  KeeFox version 1.0 approaches, I intend to branch the development of  KeePassRPC so that an improved version 2 API can be produced, hopefully  with input from other developers interested in communicating with  KeePass Password Safe. If requested, I may be able to produce this  branch fairly soon.
</p>
<p>In any event, I’d like to discuss what you might change about the  API. What would you like to see? Is there any part that could be made  simpler? What about user-interaction? Many parts of the API can trigger  interaction with the user, is that a sustainable approach for a remotely  accessible API or must we aim for a non-interactive service?
</p>
<p>KeePassRPC is written in C# and utilises the <a href="http://jayrock.berlios.de" title="Go to http://jayrock.berlios.de" target="_blank" class="externlink">JayRock</a>  libraries. It should run with the .NET Framework version 2.0 and higher  as well as Mono, although thorough testing currently occurs only with  .NET Framework 3.5 SP1.</p>
