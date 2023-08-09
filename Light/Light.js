const axios = require('axios');

function toggleLight(on) {
  const url = 'http://169.254.207.220:31950/robot/lights';
  
  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Host': '169.254.207.220:31950',
    'Opentrons-Version': '3',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Opentrons/6.3.1 Chrome/106.0.5249.181 Electron/21.3.1 Safari/537.36'
  };

  const data = {
    on: on
  };

  axios.post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error toggling light:', error);
    });
}