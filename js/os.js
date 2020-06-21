function preselectOs() {
  var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macos';
  } else if (/Android/.test(userAgent)) {
    os = 'windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  } else {
    os = 'windows';
  }

  var element = document.getElementById(os);
  element.classList.add('active');
  var tabElement = document.getElementById(os + "-tab");
  tabElement.classList.add('active');
  tabElement.setAttribute("aria-selected", true);

}
