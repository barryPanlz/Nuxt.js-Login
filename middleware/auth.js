export default function ({ store, error, redirect}) {
  if (!store.state.authUser) {
    error({
      message: '请重新登录',
      statusCode: 403
    })
    setTimeout(() => {
      redirect('/')
    }, 0);
  }
  
 
  
  
}
