import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import { signIn ,useSession,getProviders} from 'next-auth/react'

const LoginPage = () => {
  const router = useRouter()
  const {data:session,status} = useSession()
  console.log(1,session,status)
  
  useEffect(() => {
    (async()=>{
      const providers = await getProviders()
      console.log(providers,'providers')     
    })();
  }, [])
  

  if(status !== 'loading' && status === 'authenticated'){
    router.push('/')
  }

  
  return (
    <div>
        <button onClick={()=>signIn('google')}>SIGN IN</button>
    </div>
  )
}

export default LoginPage