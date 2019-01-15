let err = (vm,url)=>{
    vm.$axios.get(url)
    .then(err=>{
        switch(err){
            case '429':
                alert('错误')
        }
    })
}
export default err