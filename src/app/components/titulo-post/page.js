"use client"
import { useEffect } from "react";

export default function TitulosPost( ){
    let check = true
    useEffect(()=>{
        window.onscroll = function (){
            var scroll = document.documentElement.scrollTop
            const titulo = document.getElementById("tituloh1");
            const sizeGeneral = 8
            
            if (scroll > 450){
              if (check){
                check = false
              } 
              return
            } else if(scroll < 300 && !check){
              check = true
            } else{
              titulo.style.fontSize = sizeGeneral - scroll/100 + "dvw"
              check = true
            }
          }
    })
}