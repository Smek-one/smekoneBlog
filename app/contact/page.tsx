"use client";

import 'dotenv/config';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";


export default function Contact(){

    const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert("Message envoyé! Merci");
          },
          (error) => {
            alert("Un problème est survenue, veuillez réessayer...");
          }
        );
    }
  };
    
    return(
      <div className="container  mx-auto">
        <h1 className="text-cianOscuro text-center p-0 mb-4 text-4xl underline">Contact</h1>
      <section className="bg-cianOscuro lg:w-3/4 sm:w-full p-6 mx-auto mb-24 rounded-md shadow-none">
          <form ref={form} onSubmit={sendEmail}>
              <div className="lg:w-2/4 sm:w-full mx-auto grid grid-cols-1">
                  <label htmlFor="name" className="text-center my-2"></label>
                  <input type="text" name="name" placeholder="Nom" className="rounded-md w-100 p-2 text-center"/>
              </div>

              <div className="lg:w-2/4 sm:w-full mx-auto my-6 grid grid-cols-1">
                  <label htmlFor="firstname" className="text-center mb-2 "></label>
                  <input type="text" name="firstname" className="rounded-md text-center p-2" placeholder="Prénom"/>
              </div>

              <div className="lg:w-2/4 sm:w-full mx-auto my-6 grid grid-cols-1">
                  <label htmlFor="email" className="text-center my-2"></label>
                  <input type="email" name="email" className="rounded-md p-2 text-center w-full" placeholder="Email"/>
              </div>

              <div className="lg:w-2/4 sm:w-full mx-auto my-6 grid grid-cols-1">
                  <label htmlFor="subject" className="text-center my-2"></label>
                  <input type="text" name="subject" className="rounded-md p-2 text-center" placeholder="Sujet"/>
              </div>

              <div className="lg:w-2/4 sm:w-full mx-auto my-6 grid grid-cols-1">
                  <label htmlFor="message" className="text-center my-2"></label>
                  <textarea name="message" className="rounded-md h-56 p-2 text-center text-cianOscuro" placeholder="Message"/>
              </div>

              <button type="submit" className="flex justify-center m-auto bg-shadeBrown p-2 rounded-xl target:shadow-lg">Envoyer</button>

          </form>
      </section>
      <div className="flex justify-center items-center text-cianOscuro mt-6 pb-6">
                <HiArrowNarrowLeft />
            <Link href="/">Retour à l'accueil</Link>
            </div>
      </div>
        
    )
}