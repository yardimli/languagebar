// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  console.log('Turning ' + tab.url + ' red!');

	if (tab)
		chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
		});

});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    // do your things
    console.log("done 2");
    console.log(tabId);

  }
})
