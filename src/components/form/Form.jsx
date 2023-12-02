import React from 'react'
import Swal from 'sweetalert2';

const Form = () => {

  const handleSubmit = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "¡Gracias por tu mensaje! Te voy a contestar lo antes posible :)"
    });
  }

  return (
    <section id='contact' className='w-full h-screen flex flex-col pt-20 items-center bg-green-500'>
        <h3 className='text-3xl font-bold drop-shadow-[1px_1px_5px_rgb(96,165,250)] mt-2 mb-2'>Formulario de contacto</h3>
        <form action="https://formsubmit.co/leonardoregazzoni@gmail.com" method="POST" className='w-3/5 h-4/5'>
          <fieldset className='border-2 border-black drop-shadow-[1px_1px_5px_rgb(96,165,250)] flex flex-col h-full items-center justify-around shadow-2xl'>
            <legend className='text-xl m-2 p-2'>Dejame tu consulta</legend>
            <input type="hidden" name="_captcha" value="false"></input>
            <input className='w-3/4 rounded-sm border-2 border-black p-2' type="text" name='name' placeholder='Nombre' required/>
            <input className='w-3/4 rounded-sm border-2 border-black p-2' type="email" name='email' placeholder='Email' required/>
            <textarea className='w-3/4 rounded-sm border-2 border-black p-2' name="comment" cols="30" rows="10" placeholder='Escribe tu mensaje acá' required></textarea>
            <button onClick={()=>handleSubmit()} className='bg-blue-400 w-1/4 h-10 rounded-md border-2 border-black hover:bg-slate-700 hover:text-blue-200 hover:font-bold'>Enviar</button>
          </fieldset>
        </form>
    </section>
  );
}

export default Form;