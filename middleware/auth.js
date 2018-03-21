export default function ({ store, error, redirect}) {
  if (!store.state.authUser) {
    error({
      message: '请重新登录',
      statusCode: 403
    })
    setTimeout(() => {
      redirect('/')//中间件中如果没有权限 则让他跳转登录页
    }, 0);
  }
  
 
  
  
}
