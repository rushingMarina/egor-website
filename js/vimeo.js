let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("4620fa9a7e9142d97d166ffd06faf587ed98d931", "2koHdq889/7cdLy9l2r+qfVIV3VyVOAHG87yNJkkfXjUiqqz8bRmM4IVaUYSdm78vZXWWvjZkVBDMowbYQYB7GefS5ZOgv7oGjm4XigVdXOhm86MQ97s7DhQT11cHzaz", "1541fbead79332785b12e2a1122e6542");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
})

