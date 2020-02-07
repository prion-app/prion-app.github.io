$(document).ready(function() {
  var installScript = function(src) {
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = src;
    s.parentNode.insertBefore(b, s);
  }

  var installLinkedIn = function() {
    _linkedin_partner_id = "1832516";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    installScript("https://snap.licdn.com/li.lms-analytics/insight.min.js");
  };

  var installFacebook = function() {
    if (window.fbq) return;
    n = window.fbq = function(){
      n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
    };
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    installScript("https://connect.facebook.net/en_US/fbevents.js");

    fbq('init', '1475640072603866');
    fbq('track', "PageView");
  }

  var installGoogleAnalytics = function() {
    installScript("https://www.googletagmanager.com/gtag/js?id=UA-157808544-1");
    window.dataLayer = window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-157808544-1');
  }

  var setConsentCookie = function(accept) {
      cc = {
        accept: accept,
        date: new Date()
      };
      Cookies.set("cc", {accept: true, date: new Date()}, { expires: 365 });
  }

  var showCookieConsentModal = function() {
    $('#cookiesAcceptButton').click(function() {
      setConsentCookie(true);
      $('#cookieConsentModal').modal('hide');
    });

    $('#cookiesDenyButton').click(function() {
      for (key in Cookies.get()) {
        Cookies.remove(key);
      }

      setConsentCookie(false);
      $('#cookieConsentModal').modal('hide');
    });

    $('#cookieConsentModal').modal({backdrop: "static", keyboard: false});
  }

  var cookie = Cookies.getJSON("cc");

  if (cookie === undefined) {
    showCookieConsentModal();
  } else if (cookie.accept) {
    installLinkedIn();
    installFacebook();
    installGoogleAnalytics();
  }
});
