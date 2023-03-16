"use client"
import { SessionProvider } from "next-auth/react"
import {getSession,useSession} from 'next-auth/react';
//import Prueba from '../src/react/components/PRUEBA/Prueba'
import { useRouter } from "next/router";

export default function Home() {
    const { data:session , status } = useSession()
    console.log(session,'sesion desde backend',status)
    const router = useRouter()
    
    if(status === 'loading'){
        return(
          <>
            <span>loading</span>
          </>
        )
      }
      
      if(status === 'unauthenticated'){
        router.push('/login')
      }
    
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