function myAxios(config){

    return new Promise((reslove,reject)=>{
      if(config.params){
        console.log(config.params)
          const paramsObj = new URLSearchParams(config.params)
          const paramsData = paramsObj.toString()
          console.log(paramsData)
          config.url += '?' + paramsData
      }
  
      const xhr = new XMLHttpRequest()
      xhr.open(config.method || 'GET',config.url)
      xhr.addEventListener('loadend',function(){
        if(xhr.status >= 200 && xhr.status < 300){
          reslove(JSON.parse(xhr.response))
        }else{
          reject(new Error(xhr.response))
        }
      })

      if(config.data){
          xhr.setRequestHeader('Content-Type','application/json')
          const dataJson = JSON.parse(config.data)
          xhr.send(dataJson)
      }else{
        xhr.send()
      }
    })
}