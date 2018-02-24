/* eslint-disable */
(function () {

	function hideAds() {
		var feeds = document.querySelectorAll('[data-testid="fbfeed_story"]');
		for ( feed of feeds ) {
				var spans = feed.querySelectorAll('span');
				for ( anySpan of spans ) {
						if( anySpan.querySelector('a') ) {
								if ( anySpan.querySelector('a').href.replace(window.location.href, '') === '#'
								&& /spon.?sored/gi.test(anySpan.innerText) ) {
										var p = anySpan.closest('[data-testid="fbfeed_story"]');
										if ( p.style.display !== "none" ) {
											p.style.display = "none";
										}
								}
						}
				}
		}
	}

	function hideAdsOnSides() {
		if (document.querySelector(".ego_section")) {
      document.querySelector(".ego_section").style.display = "none";
    }
    if (document.querySelector("#GroupsRHCSuggestionSection")) {
      document.querySelector("#GroupsRHCSuggestionSection").style.display = "none";
    }
	}

	function deferredHider(timeoutId) {
		hideAds();
		clearTimeout(timeoutId);
	}
	
	var MutationObserver = window.MutationObserver || window.webKitMutationObserver || window.MozMutationObserver;
	var container = document.documentElement || document.body;
	var observer = new MutationObserver(function(mutations) {
		var timeoutId4 = setTimeout(function() {
			deferredHider(timeoutId4);
		}, 1);    
	});
	var config = { attributes: false, childList: true, subtree: true };
	observer.observe(container, config);

	document.addEventListener("load", function(event) {
		hideAds();
		hideAdsOnSides();
		var timeoutId = setTimeout(function() {
			deferredHider(timeoutId);
		}, 100);

  }, { passive: true });
	
	document.addEventListener("DOMContentLoaded", function(event) {
		hideAds();
		hideAdsOnSides();
		var timeoutId2 = setTimeout(function() {
			deferredHider(timeoutId2);
		}, 100);
  }, { passive: true });
	
	container.addEventListener("click", function(event) {
    hideAds();
  }, { passive: true });

  var timeoutId3 = setTimeout(function() {
		deferredHider(timeoutId3);
	}, 1000);
	
})();