/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

// 获取元素
const province = document.querySelector('.province')
const city = document.querySelector('.city')
const area = document.querySelector('.area')

axios({url:'http://hmajax.itheima.net/api/province'}).then(res =>{
    // console.log(res.data.list)
    const htmlStr = res.data.list.map(item =>`<option value="${item}">${item}</option>`).join('')
    province.innerHTML = `<option value="">省份</option>` + htmlStr
})

// 点击省份获取城市
province.addEventListener('change', async e =>{
    const pname = e.target.value
    console.log(pname)
    const res = await axios({
        url:'http://hmajax.itheima.net/api/city',
        params:{
            pname:pname
        }
    })

    console.log('city',res.data.list)
    const htmlStr = res.data.list.map(item =>`<option value="${item}">${item}</option>`)
    city.innerHTML = `<option value="">城市</option>` + htmlStr
    area.innerHTML = `<option value="">地区</option>`
})

// 点击城市获取区
city.addEventListener('change', e =>{

    area.innerHTML = `<option value="">地区</option>`

    const cname = e.target.value
    const pname = province.value
    console.log(province)
    axios({
        url:'http://hmajax.itheima.net/api/area',
        params:{
            pname,
            cname
        }
    }).then(res =>{
        console.log('area',res.data.list)
        const htmlStr = res.data.list.map(item =>`<option value="${item}">${item}</option>`)
        area.innerHTML = `<option value="">地区</option>` + htmlStr
    })
})

/**
 * 目标2：收集数据提交保存
 *  2.1 监听提交的点击事件
 *  2.2 依靠插件收集表单数据
 *  2.3 基于axios提交保存，显示结果
 */


document.querySelector('.submit').addEventListener('click',function(){
    const form = document.querySelector('.info-form')
    const data = serialize(form,{hash:true,empty:true})
    console.log(data)

    axios({
        url:"http://hmajax.itheima.net/api/feedback",
        method:'post',
        data
    }).then(res =>{
        console.log('res',res)
        alert(res.data.message)
    }).catch(err =>{
        console.log('err',err)
        alert(err.response.data.message)
    })
})