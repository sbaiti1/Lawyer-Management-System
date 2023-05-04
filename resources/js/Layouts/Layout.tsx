import React from "react"
import Navbar from "@/Components/Navbar";


interface Props {
    children: React.ReactNode;
    role? : string 
  }

const Layout:React.FC<Props> = (props : Props)=>{
    return(
        <div dir="rtl" className="min-h-screen bg-slate-50">
     
      
        <Navbar role={props.role || "اسم المستخدم"} />
        <div className="p-4 flex  py-8">
        
                {props.children}
        
        </div>
        </div>
    )
}

export default Layout ;