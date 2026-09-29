/* Meta Pixel Code */
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod
      ? n.callMethod.apply(n, arguments)
      : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js",
);
fbq("init", "1937853517650296");
fbq("track", "PageView");
/* End Meta Pixel Code */

/* Trustpilot registration */
(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
  a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
  tp('register', 'vAwL1sFJp16WFJf0');
