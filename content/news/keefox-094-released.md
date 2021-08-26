---
title: KeeFox 0.9.4 released
date: '2012-02-04T00:00:00+00:00'
tags:
  - keefox
  - release
  - releases
  - news
markup: HTML
---
<p><strong>Version 0.9.4 has been added to the Mozilla add-ons site so you should receive an automatic update in due course.</strong>
</p>
<p><strong>This version works with KeePass 2.18. It also adds a new message display service aimed primarily at new users</strong> (but which I hope to extend to delivery of important security notifications in the future).&nbsp;
</p>
<p>There are a number of other changes too: fixing some bugs, improving  the translations for some languages and making some fairly invisible  improvements.
</p>
<p>Full list of changes:</p>
<p><ul><li>Works with KeePass 2.18 (and installs it by default for new users) 	</li><li>.NET installer is now .NET 4 (Client Profile) 	</li><li>Firefox addon messaging service (FAMS) added to help new users with  handy tips, other important messages and potentially future security  notifications - see <a href="https://sourceforge.net/apps/trac/keefox/wiki/Manual/Technical%20architecture/FAMS" title="Go to https://sourceforge.net/apps/trac/keefox/wiki/Manual/Technical%20architecture/FAMS" target="_blank" class="externlink">https://sourceforge.net/apps/trac/keefox/wiki/Manual/Technical%20architecture/FAMS</a> for more details 	</li><li>Fixed bug that caused old style HTTP realm data, priority selection  and alternative URL data to be lost under some circumstances during  migration to the current advanced string formatting scheme 	</li><li>Users of FF4 and above can now setup KeeFox automatically even if they have non-latin characters in their profile path 	</li><li>Fixes #116 (bad regexp in any entry breaks keefox) - KeeFox no  longer breaks and also notifies the user of the problematic regular  expression 	</li><li>Locales updated 	</li><li>.NET framework detection considered successful if 2 or 4 installed (also should work on x64 FF builds now) 	</li><li>New version of Jayrock libraries added; modified to work in .NET 4 Client Profile 	</li><li>Projects/solution source code upgraded to run on VS2010 	</li><li>other minor changes </li></ul></p>
