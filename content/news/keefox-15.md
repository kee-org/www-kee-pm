---
title: KeeFox 1.5
date: '2015-08-24T00:00:00+00:00'
tags:
  - development
  - keefox
  - help
  - news
  - releases
  - release
  - tutorial
---
<p>KeeFox 1.5 is undergoing final testing and will be released soon.
</p>
<p>There are dozens of new and improved features and hundreds of smaller improvements and bug fixes. You might need to re-save some of your existing logins to take advantage of all of the improvements and ensure the login behaves as expected. Thankfully the new "update existing password" feature should make this a painless process. The rest of this post will highlight the main improvements you'll see when you upgrade.
</p>
<p>If you're reading this in an email you'll find it easier to read and navigate this post if you load it in Firefox instead: <a href="news/detail/2015/08/24/keefox-15">KeeFox 1.5</a>
</p>
<p>There are a lot of highlights so you might want to skip to the sections that interest you:</p><ul> <li><a href="news/detail/2015/08/24/keefox-15#sec-ffi">Form filling improvements</a></li> <ul><li><a href="news/detail/2015/08/24/keefox-15#sec-bdf">Better detection of forms</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-bdffi">Better identification of correct form and field to fill in</a></li> <ul><li><a href="news/detail/2015/08/24/keefox-15#sec-wad">Website address detection</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-ffp">Fewer logins auto-filled into non-login forms</a></li></ul> <li><a href="news/detail/2015/08/24/keefox-15#sec-bds">Better detection of submit buttons</a></li></ul> <li><a href="news/detail/2015/08/24/keefox-15#sec-update">Improved "Save password" feature including ability to update an existing password</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-tutorial">Tutorial and uninstallation improvements</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-e10s">Multi-process support</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-other">Hundreds of other improvements and bug fixes</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-l10n">Translation help</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-versions">Supported versions</a></li> <li><a href="news/detail/2015/08/24/keefox-15#sec-time">Release time-frame</a></li></ul><h3 id="sec-ffi">Form filling improvements</h3>
<p>To complete a typical fully automated login, KeeFox has three main tasks:<br><br></p><ol><li>Find all the forms on the web page</li><li>Work out which form to fill in, which KeePass entry to fill into that form and which specific form fields should be filled</li><li>Work out how to submit the form</li></ol><p><br>All of those tasks have been overhauled in KeeFox 1.5. In most cases this will be an improvement but there will be a few exceptions, particularly for people that often make use of the advanced KeeFox settings. If you find an existing login no longer works correctly with KeeFox 1.5, the easiest fix is to re-save the login but the information below will help you find other fixes too.<br><br>
</p>
<h4 id="sec-bdf">Better detection of forms</h4>
<p>Websites are increasingly using unpredictable ways to create the login forms you see on the page. The new version of KeeFox uses a combination of new techniques to detect more of these forms so you will find that you can fill in even more forms with KeeFox 1.5.<br><br>
</p>
<h4 id="sec-bdffi">Better identification of correct form and field to fill in</h4>
<p>KeeFox now considers more information when working out which login to fill into which form. There are two large changes:
</p>
<h5 id="sec-wad"><span style="text-decoration: underline;"><span style="font-weight: bold;"><span style="font-weight: normal;">1) Website address detection</span></span></span></h5>
<p>We can now identify the main address of a website (its domain name).<br><br>It might sound strange that this was not what happened before so I'll explain by example. Take the following URLs:<br><br></p><ul><li>https://www.google.com</li><li>https://google.com</li><li>https://mail.google.com</li></ul><p><br>Earlier versions of KeeFox could not be certain that they were all run by the same company so each URL had to be treated as a separate website. KeeFox 1.5 knows that they are all part of <span style="font-style: italic;">google.com</span> and therefore that when you try to log in to a form on any of those pages, you want your <span style="font-style: italic;">google.com</span> login to be used.<br><br>It will never be possible to get this right for 100% of websites but if you do find the occasional problematic site, you can try out the new "Minimum URL match accuracy" feature on each KeePass entry to control which entries are filled in on each of the related URLs.
</p>
<p><br> <img src="/img/minimumURLMatchAccuracy.png" alt="" style="">
</p>
<p> <br>This change might result in a few issues with your existing logins so take a look at the <a href="https://github.com/luckyrat/KeeFox/wiki/en-|-Upgrading-from-KeeFox-1.4" title="Opens external link in new window" target="_blank" class="external-link-new-window">upgrade troubleshooting tips <span class="glyphicon glyphicon-globe"></span></a> if you hit any problems.
</p>
<h5 id="sec-ffp"><span style="text-decoration: underline;">2) Fewer logins auto-filled into non-login forms</span></h5>
<p>Auto-fill and Auto-submit is now disabled for any form which has significantly more fields than the best-matching KeePass login. This prevents KeeFox from auto-filling login information into most non-login forms but there will be a few legitimate login forms that can no longer be auto-filled. Selecting the login from the matched logins list will still work in those cases but unfortunately this occasional extra click is necessary so that we can gain higher accuracy overall.
</p>
<p>&nbsp;</p>
<h4 id="sec-bds">Better detection of submit buttons</h4>
<p>Some websites use new ways to submit forms. KeeFox can now auto-submit more forms by spotting these new approaches.
</p>
<p>&nbsp;</p>
<h3 id="sec-update">Improved "Save password" feature including ability to update an existing password</h3>
<p><br>A new streamlined save password prompt will allow you to easily save login data as a new entry or update an existing entry.
</p>
<p><br> <img src="/img/updatePassword.png" width="800" alt="" style="">
</p>
<h3 id="sec-tutorial">Tutorial and uninstallation improvements</h3>
<p>I expect/hope that most people reading this are not the target audience for this improvement but you might still come across it during installs onto fresh Firefox profiles or when temporarily disabling KeeFox for testing purposes.<br><br>At the moment less than 2% of KeeFox downloads result in a new user the next day so there's obviously a lot of room for improvement in the initial add-on experience. I've therefore developed a new feature to try to help new users that are struggling to get KeeFox setup and to record relevant data that might one day allow me to identify specific areas that can be improved.<br><br>I've focussed on these three enhancements initially:<br><br></p><ol><li>A notification directing the user to the getting started tutorial will appear shortly after initial installation</li><li>The <a href="http://tutorial.keefox.org/" title="Opens external link in new window" target="_blank" class="external-link-new-window">tutorial  <span class="glyphicon glyphicon-globe"></span></a>itself has been improved (only visible when you have upgraded KeeFox) and now offers precise advice based on the user's current setup rather than the existing long list of troubleshooting tips</li><li>Users that uninstall or disable KeeFox will be given an opportunity to offer feedback about why they are doing so and everyone that submits feedback will be offered a customised suggestion of what they could do to get KeeFox to work for them if they choose to re-install</li></ol><h3 id="sec-e10s">Multi-process support</h3>
<p>Enabling support for the new multi-process Firefox has resulted in a fundamental change to the way KeeFox communicates with the websites you visit. The bits of code that read and write forms on the web page are now separated from the bits of code which communicate with KeePass. These two parts of KeeFox can now only communicate via small messages passed between them and there is no guarantee when those messages will be received.<br><br>This required such a huge overhaul of all KeeFox code that I took the opportunity to put the pieces back together in a slightly better way, resulting in many of the new features and improvements in KeeFox 1.5.<br><br>You can read more about the multi-process change in the <a href="news/detail/2015/06/02/multi-what">Multi-what?</a> article on the KeeFox site.
</p>
<h3 id="sec-other">Hundreds of other improvements and bug fixes</h3><ul><li>Support for multiple password generation profiles </li><li>Improved context menus (copy password, etc.)</li><li>Quick option to search only entries for the current website</li><li>More modern looking notifications</li><li>HTTP Auth now also affected by entry priorities and accuracy of URL match</li><li>Clean uninstallation on Thunderbird no longer requires venturing into about:config to re-enable the built-in password manager</li></ul><h3 id="sec-l10n">Translation help</h3>
<p>There are still a number of languages that are not fully available in KeeFox 1.5. All languages are included in the beta version regardless of how incomplete they are but when the final release is published in a few weeks time, some languages will be removed. The existing translators are working hard but at the moment, the following languages are partially complete:</p><ul><li>Dutch</li><li>Czech</li><li>French</li><li>Turkish</li><li>Hungarian</li><li>German</li><li>Spanish (Argentina)</li><li>Chinese (Taiwan)</li><li>Danish</li><li>Greek</li><li>Polish</li><li>Spanish (Spain)</li><li>Swedish (Sweden)</li><li>Portuguese (Brazil)</li><li>Italian</li><li>Korean (Korea)</li><li>Portuguese (Portugal)</li></ul><p>If you can help translate any of these languages or want to translate KeeFox into another language that's not currently available, please visit the <a href="https://www.transifex.com/keefox/keefox/" title="Opens external link in new window" target="_blank" class="external-link-new-window">translation centre on Transifex <span class="glyphicon glyphicon-globe"></span></a> and start contributing (please try to discuss with existing contributors first in case they are already working on some parts of the translation).
</p>
<h3 id="sec-versions">Supported versions</h3>
<p>To enable support for the multi-process versions of Firefox arriving at the end of this year, we have unfortunately had to remove support for Firefox versions lower than 29. That means we're still supporting far more versions than the target <a href="news/detail/2012/07/01/firefox-3x-support-ending">we defined</a> a few years ago but I'm sure a few users still use these very old versions so it's unfortunate that we were forced into this decision.<br><br>This version of KeeFox is the first that is unable to smoothly upgrade from KeeFox 1.1 or earlier. If you have an ancient version of KeeFox, please upgrade to KeeFox 1.4.x first to ensure you don't lose any of your current preferences.
</p>
<h3 id="sec-time">Release time-frame</h3>
<p>Assuming a successful conclusion to the beta testing period, we intend to ask Mozilla to release version 1.5 in 3-4 weeks time. We're then in the usual situation of having no idea when the release will be approved. If Mozilla are happy that there are no serious problems we'd expect the release to be available to you before the end of the year.
</p>
<p>If you want to get the new features now, you can install the latest beta by expanding the "Development channel" section at the bottom of the <a href="https://addons.mozilla.org/en-us/firefox/addon/keefox/#beta-channel" title="Opens external link in new window" target="_blank" class="external-link-new-window">KeeFox add-on page <span class="glyphicon glyphicon-globe"></span></a> and clicking on "Add to Firefox".
</p>
