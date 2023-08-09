var btnNetRequest=document.getElementById('NetRequest');
btnNetRequest.onclick = NetRequest;
console.log(NetRequest)
console.log("OnUse")
function NetRequest()
{
  const {net} = require('electron').remote;
  const request = net.request('https://blog.csdn.net/badao_liumang_qizhi');
  request.on('response', (response) => {
      console.log(`**statusCode:${response.statusCode}`);
      console.log(`**header:${JSON.stringify(response.headers)}`);
      response.on("data", (chunk)=>{
          console.log("接收到数据：", chunk.toString());
      })
      response.on('end', () => {
          console.log("数据接收完成");
      })
  });
  //结束请求，不然没有响应数据
  request.end();
}