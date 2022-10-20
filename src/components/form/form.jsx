import React, { useState } from 'react'
import service from '../../services/sendEmail'
import methodContact from '../../utils/methodContact'
import './form.css'

const Form = () => {
  const [appState, setAppState] = useState({
    comments: null,
    name: null,
    contact: null,
  })


  const [selectMethodContact, setSelectMethodContact] = useState(
    'Seleciona metodo de contacto'
  )

  function getFieldData(e, field) {
    setAppState(() => {
      return {
        ...appState,
        [field]: e.target.value,
      }
    })
  }

  function changeMethod(event) {
    setSelectMethodContact(() => {
      return event.target.value
    })
  }

  if (true) {
    return (
        <form className="flex flex-col text-purple-600 shadow-md bg-gray-100 p-5 w-full sm:max-w-lg sm:rounded-lg m-auto">
          <p className="text-lg font-bold p-3 w-full">Contact Form</p>
          <div className="justify-between sm:flex">
            <input className="h-12 text-purple-600 p-3 pr-6 rounded-lg font-bold shadow outline-none transition w-full my-2 hover:bg-gray-100 sm:mr-2 focus:bg-gray-100" type="text" placeholder="first name" maxLength="64" v-model="form.firstName" required="required"/>
            <input className="h-12 text-purple-600 p-3 pr-6 rounded-lg font-bold shadow outline-none transition w-full my-2 hover:bg-gray-100 sm:ml-2 focus:bg-gray-100" type="text" placeholder="last name" maxLength="64" v-model="form.lastName" required="required"/>
          </div>
          <input className="h-12 text-purple-600 p-3 pr-6 rounded-lg font-bold shadow outline-none transition w-full my-2 hover:bg-gray-100 focus:bg-gray-100" type="email" placeholder="email" maxLength="64" v-model="form.email" required="required"/>
          <div className="relative h-24 p-3 shadow rounded-lg bg-white w-full my-2">
            <textarea className="absolute h-16 p-3 text-purple-600 rounded-t-lg font-bold resize-none outline-none transition inset-0 w-full hover:bg-gray-100 focus:bg-gray-100" placeholder="message..." maxLength="150" v-model="form.message" required="required"></textarea>
            <div className="absolute inset-x-0 bottom-0 h-8 mr-2 select-none w-auto rounded-b-lg w-full">
              <p className="px-3 py-1 text-right">/ 150</p>
            </div>
          </div>
          <input className="mt-10 h-12 text-white bg-purple-600 p-3 rounded-lg font-bold shadow-inner shadow border border-purple-500 text-center cursor-pointer text-lg outline-none transition antialiased transform-translate w-full hover:shadow-md hover:bg-purple-500" type="submit" value="Submit"/>
        </form>
    )
  } else {
    return (
      <section className="form-contact headline" id="contact">
      <form id="form" onSubmit={(e) => service(e, appState)}>
        <h4>¡Contactanos!</h4>
        <label htmlFor="fullname">Nombre Completo</label>
        <input
          required
          onChange={(e) => getFieldData(e, 'name')}
          className="controls empty about__empty"
          type="text"
          name="fullname"
          id="fullName"
          placeholder="Ingresa tu nombre completo"
        />

        <label htmlFor="contact">Metodo de contacto</label>
        <select
          id="contact"
          onChange={changeMethod}
          value={selectMethodContact}
          className="select-method empty about__empty"
        >
          <option value="Seleciona metodo de contacto">
            Seleciona metodo de contacto
          </option>
          <option value="Numero de telefono">Numero de telefono</option>
          <option value="Email">Email</option>
        </select>

        {methodContact(
          selectMethodContact,
          getFieldData,
          appState,
          setAppState
        )}

        <label htmlFor="comments">Mensaje</label>
        <textarea
          required
          onChange={(e) => getFieldData(e, 'comments')}
          className="controls"
          rows="5"
          placeholder="Ingresa tu mensaje"
        />
        <input className="botons empty about__empty" type="submit" value="Send" />
      </form>
      </section>
    )
  }
}

export default Form
