$.getJSON("https://json.geoiplookup.io/?callback=?", function (data) {
  let ipAddress = data.ip;
  let isp = data.isp;
  let continent = data.continent_name;
  let country = data.country_name;
  let region = data.region;
  let city = data.city;
  let timezone = data.timezone_name;
  let latitude = data.latitude;
  let longitude = data.longitude;

  $("#ipAddress").append(ipAddress);
  $("#isp").append(isp);
  $("#continent").append(continent);
  $("#country").append(country);
  $("#region").append(region);
  $("#city").append(city);
  $("#timezone").append(timezone);
  $("#latitude").append(latitude);
  $("#longitude").append(longitude);
});
