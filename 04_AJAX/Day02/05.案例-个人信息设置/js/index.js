/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

const creator = 'lily'

axios({
    url:"http://hmajax.itheima.net/api/settings",
    params:{
        creator
    }
}).then(res => {
    const userObj = res.data.data
    Object.keys(userObj).forEach(key =>{
        if(key === 'avatar'){
            document.querySelector('.prew').src = userObj[key]
        }else if(key === 'gender'){
            const genders = document.querySelectorAll('.gender')
            const num = userObj[key]
            genders[num].checked = true
        }else{
            document.querySelector(`.user-form .${key}`).value = userObj[key]
        }
    })
}).catch(err => {
    console.log(err)
});

/**
 * 目标2：修改头像
 *  2.1 获取头像文件
 *  2.2 提交服务器并更新头像
 * */
// 文件选择元素->change事件
document.querySelector('#upload').addEventListener('change', e =>{
    const fd = new FormData()
    fd.append('avatar',e.target.files[0])
    fd.append('creator',creator)
    // console.log(fd)

    axios({
        url:'http://hmajax.itheima.net/api/avatar',
        method:'put',
        data:fd
    }).then((result) => {
        const imgUrl = result.data.data.avatar
        document.querySelector('.prew').src = imgUrl
    }).catch((err) => {
        console.log(err)
    });
})

/**
 * 目标3：提交表单
 *  3.1 收集表单信息
 *  3.2 提交到服务器保存
 */
/**
 * 目标4：结果提示
 *  4.1 创建toast对象
 *  4.2 调用show方法->显示提示框
 */
// 保存修改->点击
document.querySelector('.submit').addEventListener('click',e =>{
    const form = document.querySelector('.user-form')
    const formData = serialize(form,{hash:true,empty:true})
    formData.gender = +formData.gender
    axios({
        url:'http://hmajax.itheima.net/api/settings',
        method:'put',
        data:{...formData,creator}
    }).then((result) => {
        console.log(result)
        // 4.1 创建toast对象
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        toast.show()
    }).catch((err) => {
        console.log(err)
    });
})