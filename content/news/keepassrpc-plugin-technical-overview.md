---
title: KeePassRPC plugin technical overview
date: '2010-12-03T00:00:00+00:00'
tags:
  - development
  - JSON-RPC
  - KeePass
  - API
  - KeePassRPC
  - news
---
<p>As announced earlier this year, <a href="2010/keepassrpc-plugin" title="Go to http://keefox.org/2010/keepassrpc-plugin" class="externlink">KeePassRPC </a>is  a remote access interface plugin for KeePass Password Safe 2. This post  is aimed at application developers; it outlines how you could use the  plugin to enhance your user’s KeePass experience and references the  latest version of the source code (0.8.5). There is currently no  official release but you can see version 0.8.4 in use with KeeFox 0.8.4  and view the source code for 0.8.5 in the KeeFox SVN repository.
</p>
<p>The RPC system is an implementation of JSON-RPC - this is a simple  protocol and probably does not support every possible desired feature  but clients are easy to implement and existing implementations exist for  most programming languages already, so you don’t need to be a .NET C#  expert to work with this plugin.
</p>
<p>In fact, you don’t even need to be able to compile the C# source code  to get started provided you’re happy to wait until the next  experimental release of KeeFox. Either way, you will need to contact me  to “register” the name of your client application and users will then  require the latest version of the KeePassRPC plugin in order to use your  client application - more details of this process are at the end of  this post.
</p>
<p>Note that no testing has been done with concurrent connections from  multiple RPC clients. For this reason, there may be several parts of  the plugin that exhibit multi-thread bugs when more than one client  connects. The majority of the plugin code will be perfectly thread safe  but I have had to prioritise getting the plugin working with a single  RPC client (KeeFox) and have therefore cut a few corners which may  need to be worked on before multi-client support is 100% stable.  Please do let me know if you find any bugs (or better yet, any fixes  for said bugs!)
</p>
<p>The image below (click to see a larger version) shows some of the  more important areas of the plugin architecture. The most relevant to  anyone interested in calling the API is the KeePassRPCService class;  most of the listed methods can be called by sending JSON-RPC requests to  the RPC server. Many calls to the API will require or return Entry or  Group objects. I’ll leave the detail of how to authenticate and some  examples until a later post but please get in touch if you’re  interested.
</p>
<p><a href="/img/keepassrpcdiagram-1291.png" title="keepassrpcdiagram-1291.png"><img src="/img/keepassrpcdiagram-1291.png" alt="keepassrpcdiagram-1291.png" class="center" height="532" width="645" style=""></a> 
</p>
<p>The API will experience very few changes over the next few months  because I need it to remain stable in order to ensure that version 1.0  of KeeFox can be released with well-tested components. As the release of  KeeFox version 1.0 approaches, I intend to branch the development of  KeePassRPC so that an improved version 2 API can be produced, hopefully  with input from other developers interested in communicating with  KeePass Password Safe. If requested, I would be able to produce this  branch fairly soon.
</p>
<p>Version 2 is not currently under development but I hope it would include the features below. </p><p><ul><li>Extension system (probably through the use of additional KeePass  PLGX plugins?). This will allow anyone to add support for new RPC  clients without my involvement and will likely involve also adding  support for a less KeeFox focussed entry/group window tab(s). 	</li><li>Upgrade hash generation function from SHA128 to SHA256 for “future-proofed” security. 	</li><li>Some kind of audit logging (maybe best via a 3rd party KeePass plugin) 	</li><li>Give end user ability to ignore authentication requests from chosen KPRPC clients 	</li><li>Integrated HTTP(S) server to enable easier access from most locations and applications 	</li><li>Some kind of support for KeePass entry tags </li></ul>So, if you can think of any way that your application could benefit  from communication with a KeePass database please follow these steps:<ul><li>Leave a comment below or email me with the name of your client  application as you would like it displayed to KeePass users (e.g.  “KeeFox Firefox add-on”) 	</li><li>Take a look at the source code for the plugin while you wait 	</li><li>I’ll provide you with a base64 encoded hash of your client  application name (after encryption with a private key) and instructions  on how to use this to authenticate with the KeePass plugin 	</li><li>Either you or I will need to change a couple of lines in the plugin to add support for your client application 	</li><li>You can develop your client application using an experimental build of KeePassRPC until I release the next official version </li></ul></p>


