/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
getWeather()
function getWeather(cityCode='110100') {
    myAxios({
        url:'http://hmajax.itheima.net/api/weather',
        params:{
            city:cityCode
        }
    }).then((result) => {
        console.log(result)
        const data = result.data
        const keys = Object.keys(data)
        keys.forEach(key=>{
            if(key === 'dayForecast'){
                const dayForecast = data[key]
                console.log(dayForecast)
                document.querySelector('.week-wrap').innerHTML = dayForecast.map(
                    ({dateFormat,date,weatherImg,weather,temNight,temDay,windDirection,windPower}
                    )=>{
                    return `<li class="item">
                                <div class="date-box">
                                    <span class="dateFormat">${dateFormat}</span>
                                    <span class="date">${date}</span>
                                </div>
                                <img src="${weatherImg}" alt="img" class="weatherImg"/>
                                <span class="weather">${weather}</span>
                                <div class="temp">
                                    <span class="temNight">${temNight}</span>
                                    <span class="temDay">${temDay}</span>
                                    <span>℃</span>
                                </div>
                                <div class="wind">
                                    <span class="windDirection">${windDirection}</span>
                                    <span class="windPower">${windPower}</span>
                                </div>
                            </li>`
                }).join('')
                
            }else if(key === 'todayWeather'){
                // const {ultraviolet,humidity,sunriseTime,sunsetTime} = data[key]
                const todayWeather = data[key]
                const keys = Object.keys(todayWeather)
                keys.forEach(key => {
                    document.querySelector(`.today-weather .${key}`).innerHTML = todayWeather[key]
                })
            }else{
                document.querySelector(`.container .${key}`).innerHTML = data[key]
            }
        })
    }).catch((err) => {
        console.log(err)
    })
}
/**
 * 目标2：搜索城市列表
 *  2.1 绑定input事件，获取关键字
 *  2.2 获取展示城市列表数据
 */
// 2.1 绑定input事件，获取关键字
let timer = ''
document.querySelector('.search-city').addEventListener('input',e =>{
    /* if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
        console.log(e.target.value)
    }, 500); */
    myAxios({
        url:"http://hmajax.itheima.net/api/weather/city",
        params:{
            city:e.target.value
        }
    }).then(res=>{
        console.log(res)
        document.querySelector('.search-list').innerHTML = res.data.map(({code,name})=>{
            return `<li class="city-item" data-code="${code}">${name}</li>`
        }).join('')
    }).catch(err=>{
        console.log(err)
    })
})
/**
 * 目标3：切换城市天气
 *  3.1 绑定城市点击事件，获取城市code值
 *  3.2 调用获取并展示天气的函数
 */
// 3.1 绑定城市点击事件，获取城市code值
document.querySelector('.search-list').addEventListener('click',e=>{
    if(e.target.classList.contains('city-item')){
        const code = e.target.dataset.code
        getWeather(code)
    }
})