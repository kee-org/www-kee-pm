---
title: Survey Analysis
date: '2013-02-28T00:00:00+00:00'
tags:
  - keefox
  - KeePass
  - news
  - stats
---
<p>Thanks  to the hundreds of people that offered opinions, suggestions, criticism  and praise in the survey that I sent out last year.
</p>
<p>I’ve now had time to analyse the results and read your comments so I  thought I’d post a summary of the main points here. I’ll go into the  results for each of the questions about feature priorities below but  first here’s a summary of the actions resulting from this survey for  those that want the quick version.</p><ul><li>Searching KeePass entries from within Firefox is coming in KeeFox 1.3</li><li>Improved form detection and matching accuracy is coming in KeeFox 1.2; further improvements likely in 1.3 and ongoing</li><li>Right-click (context) menus as an alternative to the toolbar buttons coming in KeeFox 1.3</li><li>Fundamental changes to toolbar user interface not desirable but upcoming Firefox changes may force our hand in KeeFox 1.3 or 1.4</li><li>Improved multi-page login support is coming in KeeFox 1.2; further improvements likely in 1.3 and ongoing</li><li>Better support for specific unusual web sites (e.g. many banks)  acknowledged as high priority for most users but technical and time  restrictions will make for slow progress; some improvements in KeeFox  1.2 should help but many banks in particular will remain problematic for  a long time to come.</li></ul><p>&nbsp;</p>
<h3>Who answered the survey?</h3>
<p>I only collected very basic demographic information but the following  two graphs show that there was a nice variety of respondents who had  been using KeeFox for varying lengths of time, with a slight skew  towards long-term users (who presumably have had longer to form a  “wishlist” of improvements). They also show that the vast majority of  KeeFox users have installed KeeFox while looking to enhance their  existing experience with KeePass (this ties in with the stats for the  keefox.org website which shows that a majority of visitors to the  download page are from the keepass.info plugins page).
</p>
<p><img src="/img/chart_007.png" alt="chart_007.png" title="chart_007.png" class="center" height="210" width="345" style="">
</p>
<p><img src="/img/chart_013.png" alt="chart_013.png" title="chart_013.png" class="center" height="150" width="345" style=""><br> 
</p>
<p>Before getting into the details of the feature priorities, I’ll share this graph:
</p>
<h4>How content are you with the current KeeFox functionality? (1 = Not at all; 5 = Very pleased)</h4>
<p><img src="/img/chart.png" alt="chart.png" title="chart.png" class="center" height="150" width="186" style="">
</p>
<p>It’s encouraging to see that KeeFox is proving useful and this backs  up some of the positive feedback you’ve been providing in AMO reviews.  That said, there is clearly a long way to go before everyone is very  satisfied so all we can do is hope that improvements this year will  continue to push the graph in the right direction!
</p>
<p>&nbsp;</p>
<h3>Individual feature priority breakdowns</h3>
<p>I posted nine suggestions of improvements that need to be made to  KeeFox and asked respondents to rank each from 1 (not at all important)  to 5 (very important). Some of the suggestions were based on feedback  I’d previously received and some on my own experience and expertise.  I’ll put the graph of results for each improvement first and then  comment on the results and explain what action might result.
</p>
<h4>Search KeePass entries from within Firefox</h4>
<p><img src="/img/chart_010.png" alt="chart_010.png" title="chart_010.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: A very mixed result, suggesting that many users are  content with their current methods of initiating the login process for a  website but there is a definite desire among enough users to justify  the addition of this feature. My personal view is that this is a feature  which some users won’t be able to fully appreciate until they have  either tried it out or built up a larger collection of passwords.
</p>
<p><strong>Action</strong>: I’ll be implementing this in KeeFox 1.3<br> 
</p>
<h4>Improved form detection and matching accuracy</h4>
<p><img src="/img/chart_016.png" alt="chart_016.png" title="chart_016.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: Very clear desire from most users for an improvement  in this area. There are always going to be occasional sites that don’t  work but I’ll keep working to get as many as possible to work correctly.  The list of reasons for which a site may not be filled correctly will  shrink when KeeFox 1.2 is released but the reasons with no known  solution so far are:</p><ul><li>Sites that employ complex JavaScript to submit the form</li><li>Sites that use form fields without an actual form (often a strong overlap with the first reason)</li><li>Sites that ask for different information each time (usually banks)</li></ul><p><strong>Action</strong>: KeeFox 1.2 will improve matters for some websites.  KeeFox 1.3 and beyond will continue to build upon the improvements in  KeeFox 1.2 once achievable improvements are identified.<br> 
</p>
<h4>Support for filling in forms without password fields</h4>
<p><img src="/img/chart_018.png" alt="chart_018.png" title="chart_018.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: Slight desire for this feature but most people don’t see it as a high priority.
</p>
<p><strong>Action</strong>: KeeFox 1.2 will allow some forms that fall into this  category to be filled in, but only if they are part of a multi-page  form. Maybe the improvement will work on a wider range of sites than  I’ve intended - we’ll keep an eye on how it behaves in the wild but  given the lack of strong feeling to start with I think spending time  improving this further might not be a great idea.<br> 
</p>
<h4>Securely store the KeePass password in Firefox to enable automatic login to KeePass</h4>
<p><img src="/img/chart_002.png" alt="chart_002.png" title="chart_002.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: A strong feeling that this is unimportant.
</p>
<p><strong>Action</strong>: When considered alongside the difficulty  (impossibility?) of offering such a feature securely, I’ve got no plans  to implement this in the foreseeable future.<br> 
</p>
<h4>Right-click (context) menus as an alternative to the toolbar buttons</h4>
<p><img src="/img/chart_006.png" alt="chart_006.png" title="chart_006.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: Not the most important feature in most people’s  opinion but it’s got more supporters than detractors and I still think  I’d personally find it useful.
</p>
<p><strong>Action</strong>: It remains a high priority task which I hope to implement in KeeFox 1.3 alongside the related feature of keyboard shortcuts.<br> 
</p>
<h4>Reduce the number of toolbar buttons</h4>
<p><img src="/img/chart_014.png" alt="chart_014.png" title="chart_014.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: A strong feeling that the current toolbar button  situation is not a big problem. While I do personally re-configure the  toolbar when using KeeFox I don’t ever wish for a reduced number of  buttons. I still would like to investigate this topic in more detail  because I’m interested to assess the reasons behind the very vocal  strong opinions for a reduction in button quantity.
</p>
<p><strong>Action</strong>: While I acknowledge an increasing trend towards single  button add-ons (to the extent that some systems only permit single  button extensions) I remain to be convinced that it is a move that is  always in the user’s best interest.
</p>
<p>There are a lot of ways that the KeeFox toolbar could be modified or  replaced - removing some of the buttons is one of those ways but I still  like the idea of exploring a variety of possible user interface changes  in future - if we can prove that a change will be beneficial to a  majority of users, without significant detriment to other users I’ll  implement the change.
</p>
<p>In fact, some significant user interface changes are being worked on  in Firefox as a whole at the moment. One of those changes appears to  remove the essential functionality that KeeFox relies upon to create its  toolbar. If Firefox do not reverse direction within a few weeks we’ll  be forced to rapidly come up with an entirely new interface for KeeFox.  That will be an exciting and interesting challenge but as explained  above and borne out by your responses, it really would be best if we  could focus on other priorities!<br> 
</p>
<h4>Improved multi-page login support (e.g. username on page one, password on page two)</h4>
<p><img src="/img/chart_003.png" alt="chart_003.png" title="chart_003.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: A strong preference for improvement here but a  noticeable tendency for supporters to consider it an important but not  crucial feature. I suspect this is due to the relative rarity of  multi-page forms.
</p>
<p><strong>Action</strong>: KeeFox 1.2 will support forms with a username on page  one and a password on page two although some sites may still require  some extra configuration. With feedback from KeeFox 1.2 users I intend  to improve the out-of-the-box behaviour in this area in future versions  of KeeFox.<br> 
</p>
<h4>Better support for specific unusual web sites (e.g. many banks)</h4>
<p><img src="/img/chart_008.png" alt="chart_008.png" title="chart_008.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: Another strong desire for KeeFox to work accurately with more web sites.
</p>
<p><strong>Action</strong>: In this case, KeeFox 1.2 adds the ground work for some  further improvements but as explained elsewhere, banks are sometimes  going to actively try to prevent software like KeeFox from working -  with very limited development time available we need to pick our battles  carefully so while I can foresee some further improvements in this area  over the coming years we’ll have to acknowledge the unlikelihood of  getting every site to work.<br> 
</p>
<h4>Faster or simpler installation / setup procedure</h4>
<p><img src="/img/chart_015.png" alt="chart_015.png" title="chart_015.png" class="center" height="180" width="345" style="">
</p>
<p><strong>Result</strong>: A strong feeling that the setup procedure is OK as it  is, limited by the obvious caveat that nearly all respondents to this  survey are people that have already successfully completed the setup  process!
</p>
<p><strong>Action</strong>: There are a couple of tweaks I might make in a future  version of KeeFox but since the broad setup procedure is dictated by the  limitations of Firefox, KeePass and Windows (or Linux, Mac, etc.) there  is not a huge scope for widespread changes at the moment.
</p>
<h3>Other comments</h3>
<p>As for the open comments that many of you kindly supplied, I have  done a little tallying and found a surprising lack of repeated comments.  The main gist of the feature requests (most common first) and my  response are:</p><ol><li><strong>Create KeeFox for Google Chrome</strong>: Sorry, I only just have  enough time to devote to KeeFox so despite a desire to improve password  management for everyone across all platforms, it’s just not realistic  for me to take on a new project like this at the moment. If anyone is  interested in working on a port to Chrome (or any other browser) I am  going to be working on some changes in KeeFox 1.3 which should make it a  more realistic possibility so please get in touch.</li><li><strong>Combine toolbar buttons</strong>: Covered above.</li><li><strong>Support Linux / KeePassX</strong>: Linux is now supported; making KeePassX work is not really an option at the moment but maybe that will change one day.</li></ol><p>Finally, I have to share this gem: “Do not really understand what  keefox is or what it does or how to use it. I may be using it and just  not aware of it.” Some people really love filling in surveys!</p>
