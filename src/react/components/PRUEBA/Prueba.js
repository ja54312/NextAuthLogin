"use client"
import React from "react";
import { useEffect, useState } from "react";
import {getSession,useSession} from 'next-auth/react';
import {getServerSideProps} from 'next'
import { useRouter } from "next/router";

const Prueba = () => {
  
  const { data:session , status } = useSession()
  console.log(session,'sesion desde backend',status)
  const router = useRouter()
  //const user = session.user
  //const [user,setUser] = useState(null)

  // useEffect(() => {
  //   (async ()=>{
  //     const session = await getSession()
  //     setUser(session.user)
  //   })()
  // }, [])

  if(status === 'loading'){
    return(
      <>
        <span>laoding</span>
      </>
    )
  }
  
  if(status === 'unauthenticated'){
    router.push('/login')
  }

  return (
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
  );
};

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context)
//   return{
//     props:{
//       session:session
//     }
//   }
// }

export default Prueba;
