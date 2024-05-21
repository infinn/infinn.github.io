"use client"
import { useEffect } from "react";

export default function TitulosPost( ){
    let check = true
    useEffect(()=>{
        window.onscroll = function (){
            var scroll = document.documentElement.scrollTop
            const titulo = document.getElementById("tituloh1");
            const sizeGeneral = 8
            var anchoVentana = window.innerWidth
            
            if (scroll > 450){
                if (check){
                  check = false
                } 
                return
            }   else if(scroll < 300 && !check){
                check = true
            } else{
                if(anchoVentana < 1500){
                  titulo.style.fontSize = sizeGeneral - scroll/100 + "dvw"
                  check = true
                } else{
                  titulo.style.fontSize = sizeGeneral - scroll/100 + "rem"
                }
            }
        }
    })
}