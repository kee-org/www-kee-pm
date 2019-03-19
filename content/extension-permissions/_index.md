---
title: Extension Permissions
---

Kee needs a variety of permissions to deliver it's functionality to you.

## The permissions

<table border="1">
<thead>
<tr>
<th>Technical names</th>
<th>Firefox names</th>
<th>Chrome names</th>
<th>Used for</th>
</tr>
</thead>
<tbody>
<tr>
<td>"tabs" and "activeTab"</td>
<td>Access browser tabs</td>
<td>Your tabs and browsing activity</td>
<td>Core functionality such as detecting web page locations, titles and working around various Firefox and Chrome bugs that would otherwise prevent Kee from functioning correctly</td>
</tr>
<tr>
<td>"&lt;all_urls&gt;"</td>
<td>Access your data for all websites</td>
<td>Your data on all the websites you visit</td>
<td>It's not possible for Kee to predict which web pages you will need to sign in to so we must request access to all pages. Note that the behaviour of this permission is changing during 2018 and 2019 so that your browser will give you additional options - we recommend using the intended behaviour of "enabled on all websites" because this is the only configuration that we have tested and can support but you may have luck with enabling additional restrictions if you have a very specific use case for the Kee extension.</td>
</tr>
<tr>
<td>"contextMenus"</td>
<td>-</td>
<td>-</td>
<td>The context menu that is shown when you right click your mouse on a web page</td>
</tr>
<tr>
<td>"privacy"</td>
<td>Read and modify privacy settings</td>
<td>-</td>
<td>Prevent the built-in password manager conflicting with Kee</td>
</tr>
<tr>
<td>"storage" and "unlimitedStorage"</td>
<td>Store unlimited amount of client-side data</td>
<td>-</td>
<td>Stores information essential for connecting to KeePass and Kee options</td>
</tr>
<tr>
<td>"clipboardWrite" and "clipboardRead"</td>
<td>Input data to the clipboard and Get data from the clipboard</td>
<td>Data you copy and paste</td>
<td>Generate new passwords</td>
</tr>
<tr>
<td>"webNavigation"</td>
<td>Access browser activity during navigation</td>
<td>Your browsing history</td>
<td>Know when a tab is loading a new web page so we can search for sign-in forms on that page, etc.</td>
</tr>
<tr>
<td>"webRequest" and "webRequestBlocking"</td>
<td>-</td>
<td>-</td>
<td>Log you in to websites that send network authentication requests (also known as HTTP Auth)</td>
</tr>
<tr>
<td>"notifications"</td>
<td>Display notifications to you</td>
<td>-</td>
<td>Display temporary notifications about important events</td>
</tr>
</tbody>
</table>

<p>
<br/>
Please note that the technical names are the real permissions that are made available to Kee. Web browsers frequently change the name and description of these permissions (as well as displaying them in languages other than English). Some displayed permissions may cover more than one technical permission and this mapping of displayed permission to real (technical) permission may be changed by browsers at any time, potentially creating an illusion that Kee has added/removed required permissions when this is not the case. In some cases, one browser will display a permission message while another determines that the permission does not need to be explicitly presented to you. Again, this may change in each browser version and we can't promise to keep this page up to date with every change that the various browser creators make.
</p>

## Optional vs Required

As of 2019 it may be possible for some permissions to be requested during your use of Kee, rather than at the initial installation time. All new permissions we add will be made optional if it is technically feasible to do so. We have also considered the feasibility of making existing required permissions optional and found that it is not possible although in a couple of cases some future changes to Kee features may allow this to be reconsidered.

<table border="1">
<thead>
<tr>
<th>Technical names</th>
<th>Can be optional?</th>
<th>When is it needed or why is it always required?</th>
</tr>
</thead>
<tbody>
<tr>
<td>"tabs" and "activeTab"</td>
<td>N</td>
<td>Extension cannot start or function without these permissions.</td>
</tr>
<tr>
<td>"&lt;all_urls&gt;"</td>
<td>N</td>
<td>Unlikely to be practical for users to manually whitelist every web page; No technical possibility to control this permission at runtime.</td>
</tr>
<tr>
<td>"contextMenus"</td>
<td>N</td>
<td>No technical possibility to control this permission at runtime.</td>
</tr>
<tr>
<td>"privacy"</td>
<td>N</td>
<td>No technical possibility to control this permission at runtime.</td>
</tr>
<tr>
<td>"storage" and "unlimitedStorage"</td>
<td>N</td>
<td>Need for more than 5MB of storage space will be reached at an unpredictable time and not as a result of a user-triggerred event so requesting permission is both too late and not technically possible.</td>
</tr>
<tr>
<td>"clipboardWrite" and "clipboardRead"</td>
<td>N</td>
<td>Current password generation feature creates the requirement for clipboard access from non-user-triggerred events and thus can not trigger an optional permissions request. This can be reconsidered if the generation of new passwords changes in future.</td>
</tr>
<tr>
<td>"webNavigation"</td>
<td>N</td>
<td>Extension cannot function without this permission.</td>
</tr>
<tr>
<td>"webRequest" and "webRequestBlocking"</td>
<td>N</td>
<td>Extension cannot function without these permissions.</td>
</tr>
<tr>
<td>"notifications"</td>
<td>N</td>
<td>Notifying a user to request the display of notifications using a permission that is otherwise never mentioned to them seems counter-intuitive, even confusing.</td>
</tr>
</tbody>
</table>

## Further reading

For more information about browser extension permissions, we recommend these articles:

* Firefox users: https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions
* Chrome users: https://support.google.com/chrome_webstore/answer/186213?hl=en-GB
