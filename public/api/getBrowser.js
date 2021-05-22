var result = bowser.getParser(window.navigator.userAgent);

document.getElementById("browser").innerHTML +=
  "You're browsing with " +
  result.parsedResult.browser.name +
  " v" +
  result.parsedResult.browser.version +
  " on " +
  result.parsedResult.os.name;
