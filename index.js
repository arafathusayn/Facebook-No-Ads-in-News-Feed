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
	
	var MutationObserver = window.MutationObserver || window.webKitMutationObserver || window.MozMutationObserver;
	var container = document.documentElement || document.body;
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			hideAds();
		});    
	});
	var config = { attributes: true, childList: true};
	observer.observe(container, config);

	document.addEventListener("load", function(event) {
		hideAds();
		hideAdsOnSides();
  }, { passive: true });
	
	document.addEventListener("DOMContentLoaded", function(event) {
		hideAds();
		hideAdsOnSides();
  }, { passive: true });
	
	container.addEventListener("click", function(event) {
    hideAds();
  }, { passive: true });
	
	window.addEventListener("scroll", function() {
    hideAds();
  }, { passive: true });
	
})();