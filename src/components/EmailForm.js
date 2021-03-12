import React from "react";
import emailjs from 'emailjs-com'

export default function EmailForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_l6so5vg', e.target, `${process.env.REACT_APP_EMAILJS_USER}`)
      .then((result) => {
          console.log(result.text);
          alert(result.text + ', mensaje enviado!')
      }, (error) => {
          alert(error.text + ', intente más tarde.');
      });
      e.target.reset()
  }

  return (
    <>
      <div className='form-wrapper'>
        <div className='container'>
          <form onSubmit={sendEmail}>
            <div className='singleItem'>
              <label htmlFor="name">Nombre</label>
              <input type='text' className='name' placeholder='Tu nombre...' name='name'/>
            </div>
            <div className='singleItem'>
            <label htmlFor="email">Email</label>
            <input type='text' className='email' placeholder='Tu correo electrónico...' name='email' required/>
            </div>
            <div className='singleItem'>
            <label htmlFor="subject">Asunto</label>
            <input type='text' className='asunto' placeholder='El motivo de tu consulta...' name='subject'/>
            </div>
            <div className="textArea singleItem">
            <label htmlFor="message">Mensaje</label>
            <textarea type='text' rows='5' cols='30' placeholder='Tu mensaje...' name='message'/>
            </div>
            <div className="btn">
                <button type="submit">Enviar</button>
            </div>
          </form>
        </div>  
      </div>
    </>
  );
}