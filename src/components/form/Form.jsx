import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Form = () => {

  const form = useRef();

  const showAlert = () => {
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Gracias por tu mensaje",
      text: "De ser necesario, te contestaré lo antes posible",
      showConfirmButton: true,
      position: "center"
    }).then((result) => {
      if(result.isConfirmed) {
        document.getElementById("form").reset();
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_02fwqi8', 'template_l1rimze', form.current, 'GXkdmm6WR3rIj8-TN')
      .then((result) => {
        showAlert();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='w-full h-screen flex flex-col pt-20 items-center bg-green-500'>
        <h3 className='text-3xl font-bold drop-shadow-[1px_1px_5px_rgb(96,165,250)] mt-2 mb-2'>Formulario de contacto</h3>
        <form id='form' ref={form} onSubmit={handleSubmit} method="POST" className='w-full h-4/5 md:w-4/5 lg:w-3/5'>
          <fieldset className='border-2 border-black flex flex-col mx-2 h-full items-center justify-around shadow-2xl'>
            <legend className='text-xl m-2 p-2'>Dejame tu mensaje</legend>
            <input className='w-3/4 my-2 rounded-sm border-2 border-black p-2' type="text" name='name' placeholder='Nombre' required/>
            <input className='w-3/4 my-2 rounded-sm border-2 border-black p-2' type="email" name='email' placeholder='Email' required/>
            <textarea className='w-3/4 my-2 rounded-sm border-2 border-black p-2' name="message" cols="30" rows="10" placeholder='Escribe tu mensaje acá' required></textarea>
            <button type='submit' className='bg-blue-400 w-1/4 h-10 rounded-md my-2 border-2 border-black hover:bg-slate-700 hover:text-blue-200 hover:font-bold duration-500'>Enviar</button>
          </fieldset>
        </form>
    </section>
  );
}

export default Form;