//import { SessionProvider } from "next-auth/react"
import {getSession,useSession} from 'next-auth/react';
//import {getServerSideProps} from 'next'
//import Prueba from '../src/react/components/PRUEBA/Prueba'
//import { useRouter } from "next/router";

const Home = (sesion) => {
  console.log(sesion.pageProps.sesion,'session desde el back')
  const session = sesion.pageProps.sesion
    // const { data:session , status } = useSession()
    // console.log(session,'sesion desde backend',status)
    // const router = useRouter()
    
    // if(status === 'loading'){
    //     return(
    //       <>
    //         <span>loading</span>
    //       </>
    //     )
    //   }
      
    //   if(status === 'unauthenticated'){
    //     router.push('/login')
    //   }
    
      return (
        //<SessionProvider>
            <div className="container-Prueba">
            {
                session ? (
                <div>
                    <h1>Holi soy una Landing Page para Brigada Murci</h1>
                    <h2>Adopta muchos perritos,Porfavooooor</h2>
                    <span>{session.user.name}</span>
                    <span>{session.user.email}</span>
                    <img src={session.user.image} alt=""/>
                </div>
                ):(
                <p>skeleton</p>
                )
            }
            </div>
        //</SessionProvider>
      );
}

export async function getServerSideProps(context) {
  const sesion = await getSession(context)
  //console.log(session,'session back')

  if (!sesion) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return { 
    props: { 
      sesion:sesion
    } 
  }
}

export default Home
