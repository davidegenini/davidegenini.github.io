<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
  </style>
</head>
<body>
<p class="p1">// Smooth scrolling</p>
<p class="p1">document.querySelectorAll('a[href^="#"]').forEach(anchor =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>anchor.addEventListener('click', function(e) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>e.preventDefault();</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.querySelector(this.getAttribute('href')).scrollIntoView({</p>
<p class="p1"><span class="Apple-converted-space">            </span>behavior: 'smooth'</p>
<p class="p1"><span class="Apple-converted-space">        </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1">});</p>
</body>
</html>
