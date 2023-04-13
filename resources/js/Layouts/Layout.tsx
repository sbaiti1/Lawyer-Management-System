import React from "react"
import Navbar from "@/Components/Navbar";


interface Props {
    children: React.ReactNode;
  }

const Layout:React.FC<Props> = ({children})=>{
    return(
        <div dir="rtl" className="h-screen bg-slate-50">
     
        <Navbar />
        <div className="p-4 flex  py-8">
        
                {children}
        
        </div>
        </div>
    )
}

export default Layout ;