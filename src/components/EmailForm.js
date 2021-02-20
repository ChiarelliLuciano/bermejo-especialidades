import React from "react";
import emailjs from 'emailjs-com'
import Credentials from './Credentials'


export default function EmailForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_l6so5vg', e.target, Credentials.EMAILJS_USER)
      .then((result) => {
          console.log(result.text);
          alert(result.text + ', mensaje enviado!')
      }, (error) => {
          console.log(error.text);
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

/*
import axios from "axios";

class EmailForm extends React.Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleLastname = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("mensaje NO enviado");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 5000);
  };

  render() {
    return (
      <>
        <div className="form-wrapper">
          <div className="container">
            <form onSubmit={this.formSubmit}>
              <div className="singleItem">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  placeholder="tu nombre..."
                  name="name"
                  className="name"
                  value={this.state.name}
                  onChange={this.handleName}
                ></input>
              </div>
              <div className="singleItem">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  placeholder="tu apellido..."
                  name="apellido"
                  className="apellido"
                  value={this.state.lastname}
                  onChange={this.handleLastname}
                ></input>
              </div>
              <div className="singleItem">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  placeholder="tu email..."
                  name="email"
                  className="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  required
                ></input>
              </div>
              <div className="textArea singleItem">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tu mensaje..."
                  cols="30"
                  value={this.state.message}
                  onChange={this.handleMessage}
                ></textarea>
              </div>
              <div className={this.state.sent ? "msg msgAppear" : "msg"}>
                Mensaje enviado!
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
}
export default EmailForm;
*/

