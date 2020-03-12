(function() {
  function hideAds() {
    var feeds = document.querySelectorAll('[data-testid="fbfeed_story"]');

    if (feeds.length === 0) {
      var links = document.querySelectorAll('a[href*="/ads/"]');

      for (var link of links) {
        if (/s.?p.?o.?n.?s.?o.?r.?e.?d/gi.test(link.innerText)) {
          var child = link.parentElement;
          var parent = link.parentElement.parentElement;

          for (var i = 0; i < 500; i++) {
            if (parent.getAttribute("role") === "feed") {
              console.log("Removing Ad");
              console.log(child);
              child.remove();
              break;
            } else {
              child = parent;
              parent = parent.parentElement;
            }
          }
        }
      }
    }

    for (feed of feeds) {
      var links = feed.querySelectorAll("div a");
      for (link of links) {
        if (/s.?p.?o.?n.?s.?o.?r.?e.?d/gi.test(link.innerText)) {
          var p = link.closest('[data-testid*="fbfeed_story"]');
          p.remove();
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
    }, 5);
  });

  var config = { attributes: false, childList: true, subtree: true };
  observer.observe(container, config);

  document.addEventListener(
    "load",
    function(event) {
      hideAds();
      hideAdsOnSides();
      var timeoutId = setTimeout(function() {
        deferredHider(timeoutId);
      }, 100);
    },
    { passive: true }
  );

  document.addEventListener(
    "DOMContentLoaded",
    function(event) {
      hideAds();
      hideAdsOnSides();
      var timeoutId2 = setTimeout(function() {
        deferredHider(timeoutId2);
      }, 100);
    },
    { passive: true }
  );

  var timeoutId3 = setTimeout(function() {
    deferredHider(timeoutId3);
  }, 1000);
})();
