---
title: KeePassRPC security and authentication
date: '2010-12-11T00:00:00+00:00'
tags:
  - development
  - JSON-RPC
  - KeePass API
  - KeePassRPC
  - news
  - security
markup: HTML
---
<p>Another  technical post here which explains why KeePassRPC is secure and how an  application developer needs to handle authentication with the plugin to  protect its users.
</p>
<p>Security conscious people might view a KeePass remote access system  with fear and loathing and it is true that installing this plugin  exposes a new attack vector. I’ll explain how KeePassRPC can be  exploited to access a user’s password database but you will see that the  installation of the plugin is safe provided that…
</p>
<p>A) Neither me nor any 3rd party developers of libraries used in this project have made a mistake in the plugin code
</p>
<p>B) Both client and server machines remain secured from 3rd party threats such as viruses, trojans, keyloggers, etc.
</p>
<p>The source code for this plugin is available for all to view - this  is the best reassurance that you can get regarding point A; of course if  any mistakes are discovered I would fix them as quickly as possible and  announce the release of the new version straight away.
</p>
<p>Point B is often a matter of contention among users looking for a  high security password management system. An oft-repeated claim is that  “product x protects against keyloggers” and while there is usually truth  to this statement it is never a cast-iron guarantee of protection.  There really is nothing that can be done to protect your data once any  machine you use has been compromised - security software will protect  you against the most common (usually generic) attacks but they are not  the panacea they sometimes market themselves as.
</p>
<p>With that in mind I will introduce the first way in which KeePassRPC  protects a KeePass user’s data but first some background information is  required.
</p>
<p>After installing KeePassRPC, the KeePass executable will begin  listening on a network port for requests from other applications that  want to access the data inside KeePass. Currently this communication is  limited to network traffic that stays within the local computer (aka  localhost or 127.0.0.1 on an IPv4 network) which limits the scope for  remote exploitation; as with any network server it may become necessary  to permit remote access for some client applications (this change would  be announced and explained to users).
</p>
<p>This communication is encrypted by an SSL connection in a similar way  to the protection offered during online payment transactions. This  provides assurance to the RPC client that any data transferred across  the connection is protected from eavesdroppers and is going to/from only  the KeePassRPC plugin. If the local (server) machine is compromised and  the private key stolen, a malicious application could pretend to be  KeePassRPC. This is bad but damage is likely to be limited to collection  of new password data and hence is unlikely to result in widespread data  disclosure unless data collection occurs over a considerable length of  time.
</p>
<p>Being an open source application presents unique challenges to secure  public/private key communication since all keys that are included in  the application are by definition NOT private. KeePassRPC works around  this by borrowing a bit of code from the Mono project which allows the  generation of a new private/public key pair on the user’s machine. This  key is then stored in the .NET key store, providing a certain amount of  protection against malicious users stumbling across it.
</p>
<p>A more concerning issue exists though: What if the attacker pretends  to be an RPC client and connects to KeePassRPC to extract all password  data? In this case it is irrelevant whether the client can trust  KeePassRPC and the encrypted transport protocol does nothing to stop the  attacker accessing data. This exploit is particularly interesting to an  attacker if they can connect to KeePassRPC remotely since execution  privileges on the server running KeePass would not be required.
</p>
<p>An examination of the KeePassRPC source code will show that this  eventuality has been anticipated and the user has been given tools with  which to protect themselves against this threat, giving the KeePassRPC  plugin reassurance that the client requesting authentication is who it  claims to be. To do this, the client sends its name and a cryptographic  signature of that name to KeePassRPC. Using the public key in the  KeePassRPC source code the plugin is able to confirm that the client’s  name is accurate.
</p>
<p>Job done? Not quite…
</p>
<p>What is to stop an attacker from impersonating a known client? For  example, said attacker could just look in the KeeFox add-on source code  to extract the official KeeFox name and signature and send those to  KeePassRPC for successful authentication and full access to the user’s  passwords!
</p>
<p>Protection against this threat relies on the client application (e.g.  KeeFox) storing a private identifier and sending this to KeePassRPC  (again, this must be generated dynamically rather than stored in the  public source code). The combination of claimed name, official confirmed  signature and unique private identifier gives KeePassRPC assurance that  the authentication request has come from a known client. This  information is of course transferred over the already encrypted  transport layer.
</p>
<p>There is a remaining problem: How does KeePassRPC know that it can  trust one client but not another? Unfortunately we have to defer to the  user’s own judgement here. Any previously unknown clients must be  presented to the KeePass user for confirmation before their first  successful authentication. Any clients that the user authorises are  recorded in the KeePass XML config file to enable automatic  authorisation for all future requests from that same client. The actual  data written to the config file consists of a hash of the combined  client identifier signature and unique private identifier.
</p>
<p>This STILL leaves some unanswered questions:
</p>
<p>What if someone manipulates the KeePass config file? This is where  point B (back at the top of the article) is most keenly highlighted - if  an attacker can manipulate the KeePass config file they have a variety  of options open to them to exploit the password data. On the off-chance  that it is ONLY the config file that they can modify then I think that  KeePassRPC may be exposing a new attack surface. “Never say never” but I  think this situation is as close to never as you could safely get (why  would this be the only writeable file?!) If any other files are  writeable or new files can be created there are thousands of other  easier ways to break into a KeePass database without messing around  calculating suitable SHA hashes.
</p>
<p>What if the user is tricked into authorising a malicious client? The  authorisation dialog boxes are presented in a way that should reduce the  likelihood of this happening but we must accept it is a possibility,  perhaps especially among those users who do not fully understand the  language of the questions they are asked by KeePassRPC.
</p>
<p>So this protection results in the following required handshake between an RPC client and the KeePassRPC server:
</p>
<p>Client -&gt; Server: Standard SSL handshake to encrypt transport channel
</p>
<p>Client -&gt; Server: JSON-RPC “Authenticate” request sent, including  client version number, client name, base64 encoded signature of client  name and a base64 encoded private identifier
</p>
<p>Server -&gt; Client (assuming successful authentication): Return value of 0 (zero) to the “Authenticate” method request
</p>
<p>As explained in the previous post, you will need to contact me in  order to get the correct signature for your chosen client name.</p>
