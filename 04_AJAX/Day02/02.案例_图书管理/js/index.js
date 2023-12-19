/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

const creator = 'lily'
// 封装-获取并渲染图书列表
function getBookList(){
    axios({
        url:'http://hmajax.itheima.net/api/books',
        params:{
            creator
        }
    }).then(res => {
        // console.log(res)
        const bookList = res.data.data
        const html = bookList.map(({id,author,bookname,publisher},k)=>{
            return `
            <tr>
                <td>${k+1}</td>
                <td>${bookname}</td>
                <td>${author}</td>
                <td>${publisher}</td>
                <td data-id="${id}">
                    <span class="del">删除</span>
                    <span class="edit">编辑</span>
                </td>
            </tr>
            `
        }).join('')

        document.querySelector('.list').innerHTML = html
    }).catch(err => {
        console.log(err)
    });
}
// 页面初次渲染
getBookList()

/**
 * 目标2：新增图书
 *  2.1 新增弹框->显示和隐藏
 *  2.2 收集表单数据，并提交到服务器保存
 *  2.3 刷新图书列表
 */
// 2.1 创建弹框对象
// 获取元素
const addModalDom = document.querySelector('.add-modal')
const addFormModal = new bootstrap.Modal(addModalDom)
document.querySelector('.add-btn').addEventListener('click',function(){
    
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm,{hash:true,empty:true})

    axios({
        url:'http://hmajax.itheima.net/api/books',
        method:'post',
        data:{
            ...bookObj,
            creator,
        }
    }).then(res => {
        console.log('添加图书',res)
        // 重新渲染列表
        getBookList()
        // 表单重置
        addForm.reset()
        // 隐藏新增书籍窗口
        addFormModal.hide()
    }).catch(err => {
        console.log('添加图书',err)
    });
})
/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件->获取图书id
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */
// 3.1 删除元素->点击（事件委托）
document.querySelector('.list').addEventListener('click',function(e){
    if(e.target.classList.contains('del')){
        const id = e.target.parentNode.dataset.id
        axios({
            url:'http://hmajax.itheima.net/api/books/'+id,
            method:'DELETE',
        }).then(res=>{
            console.log('删除元素',res)
            // 重新渲染列表
            getBookList()
        }).catch(err=>{
            console.log('删除元素',err)
        })
    }
})
/**
 * 目标4：编辑图书
 *  4.1 编辑弹框->显示和隐藏
 *  4.2 获取当前编辑图书数据->回显到编辑表单中
 *  4.3 提交保存修改，并刷新列表
 */
// 4.1 编辑弹框->显示和隐藏
const editModalDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editModalDom)
// 显示编辑弹窗
document.querySelector('.list').addEventListener('click',function(e){
    if(e.target.classList.contains('edit')){
        const id = e.target.parentNode.dataset.id
        axios({
            url:'http://hmajax.itheima.net/api/books/'+id,
        }).then(res => {
            console.log('编辑弹框',res)
            const bookData = res.data.data
            const keys = Object.keys(bookData)
            keys.forEach(key=>{
                document.querySelector(`.edit-form .${key}`).value = bookData[key]
            })
            // 编辑弹窗open
            editModal.show()

        }).catch(err => {
            console.log('编辑弹框',err)
        });
    }
})

// 隐藏编辑弹窗
document.querySelector('.edit-btn').addEventListener('click',function(){
    const editForm = document.querySelector('.edit-form')
    const {id,bookname,author,publisher} = serialize(editForm,{hash:true,empty:true})
    // 保存正在编辑的图书id，隐藏起来：无需让用户修改
    // <input type="hidden" class="id" name="id" value="84783">
    axios({
        url:'http://hmajax.itheima.net/api/books/'+id,
        method:'put',
        data:{
            bookname,
            author,
            publisher,
            creator
        }
    }).then(res=>{
        console.log('隐藏编辑弹窗',res)
        editModal.hide()
        // editForm.reset()
        getBookList()
    }).catch(err=>{
        console.log('隐藏编辑弹窗',err)
    })
})