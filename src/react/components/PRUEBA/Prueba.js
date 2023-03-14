"use client"
import React from "react";
import { useEffect, useState } from "react";
import {getSession} from 'next-auth/react';
import {getServerSideProps} from 'next'

const Prueba = ({session}) => {
  console.log(session,'sesion desde backend')

  const [user,setUser] = useState(null)

  useEffect(() => {
    (async ()=>{
      const session = await getSession()
      setUser(session.user)
    })()
  }, [])
  

  return (
    <div className="container-Prueba">
      <h1>Holi soy una Landing Page para Brigada Murci</h1>
      <h2>Adopta muchos perritos,Porfavooooor</h2>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  return{
    props:{
      session:session
    }
  }
}

export default Prueba;
