import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import {RiTwitterXFill, RiInstagramLine, RiGithubFill} from "react-icons/ri";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
    <div className="bg-cianOscuro mb-10 p-4 grid grid-cols-1 mx-auto min-w-2xl bg-emerald-300 h-full">
    <h1 className=" text-shadeBrown text-2xl font-bold "><a href="/">Smek-One Blog</a></h1>
    <p className="text-blueGreen font-light text-sm">La nature à travers l'objectif d'un passionné</p>
    <div className="absolute right-4 top-0">
      <a href="/" >
      <Image src="/logo.png" alt="logo" width={80} height={80} className="shadow-md shadow-white"></Image>
      </a>
    </div>
    </div>
    
  </header>
  );

  const footer = (
    <footer className="bg-springBud border-t-2 text-center bg-cyan-600 h-auto">
     <div className="border-slate-900 text-center">
        <h3 className="text-black mt-9">Developed with
          <span className="text-red-700 mx-2">&#x2661;</span>
           by Smek-one</h3>
           </div>

           {/*MENU PAGES */}
      <div className="text-cianOscuro font-extralight mb-4 underline underline-offset-2 decoration-zinc-600">
      <Link href="/" className="mx-2">Accueil</Link>
      <Link href="/contact" className="mx-2">Contact</Link>
      <Link href="/about" className="mx-2">À propos</Link>
      </div>

      {/*SOCIAL LINKS */}
      <div className="text-center border-t-2 border-cianOscuro w-1/4 mx-auto">
        <p className="md:underline pt-6 md:text-xl sm:text-xs sm:no-underline">Suivez-moi sur les réseaux:</p>
      
      <div className="flex justify-center mt-6">
        <a href="https://twitter.com/smek_one" className="mx-2 mt-2 mb-4 text-cianOscuro">
        <RiTwitterXFill className="text-3xl"/> 
        </a> 
       
        <a href="https://www.instagram.com/smek_one_pics/" className="mx-2 mt-2 mb-4 text-cianOscuro">
        <RiInstagramLine className="text-3xl"/> 
        </a>  

        <a href="https://github.com/Smek-one" className="mx-2 mt-2 mb-4 text-cianOscuro">
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
