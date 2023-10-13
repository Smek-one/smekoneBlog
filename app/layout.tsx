import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import {RiTwitterXFill, RiInstagramLine, RiGithubFill} from "react-icons/ri";
import Sidebar from "../components/Sidebar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  {
    //HEADER BAR
  }
  const header = (
    <header>
    <div className="bg-cianOscuro mb-10 p-4 grid grid-cols-1 mx-auto min-w-2xl bg-emerald-300 h-full">
    <h1 className=" text-shadeBrown text-2xl font-bold lg:pl-48 "><a href="/">Smek-One Blog</a></h1>
    <p className="text-blueGreen font-light text-sm lg:pl-48">La nature à travers l'objectif d'un passionné</p>
    <div className="absolute right-4 top-0">
      <a href="/" >
      <Image src="/logo.png" alt="logo" width={80} height={80} className="shadow-md shadow-white"></Image>
      </a>
    </div>
    </div>
    
  </header>
  );

  {
    //FOOTER
  }

  const footer = (
    <footer className="bg-cianOscuro border-t-1 text-center h-auto">

            {
           //MENU PAGES
           }
      

     <div className="border-springBud text-center pt-6">
        <h3 className="text-shadeBrown my-6 underline-offset-2">Developed with
          <span className="text-red-700 mx-2">&#x2661;</span>
           by Smek-one</h3>
           </div>

      {
           //SOCIAL LINKS
           }
      <div className="text-center border-t-2 border-springBud w-1/4 mx-auto">
        <p className="text-shadeBrown md:underline underline-offset-2 pt-6 md:text-xl sm:text-xs sm:no-underline">Mes réseaux:</p>
      
      <div className="flex justify-center mt-6">
        <a href="https://twitter.com/smek_one" className="mx-2 mt-2 mb-4 text-springBud">
        <RiTwitterXFill className="text-3xl"/> 
        </a> 
       
        <a href="https://www.instagram.com/smek_one_pics/" className="mx-2 mt-2 mb-4 text-springBud">
        <RiInstagramLine className="text-3xl"/> 
        </a>  

        <a href="https://github.com/Smek-one" className="mx-2 mt-2 mb-4 text-springBud">
        <RiGithubFill className="text-3xl"/> 
        </a>  
      </div>
      </div>
    </footer>
  );

  return (
    <html lang="fr">
      <body>
        <div>
        <Sidebar />
          {header}
        <div className="m-4">
          {children}
          
        </div>
        <div>
            {footer}
            </div>
        </div>
        </body>
    </html>
  )
}
