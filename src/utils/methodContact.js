import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const style = {
  background: '#24303c',
  border: '1px solid #1f53c5',
  color: 'gray',
}

const dropdownStyle = {
  background: '#24303c',
  border: '1px solid #1f53c5',
  color: 'gray',
}

const buttonStyle = {
  background: '#24303c',
  border: '1px solid #1f53c5',
}

export default function methodContact(method, getFieldData, state, setState) {
  if (method === 'Seleciona metodo de contacto') {
    return
  }

  if (method === 'Email') {
    return (
      <input
        required
        onChange={(e) => getFieldData(e, 'contact')}
        className="controls empty about__empty"
        type="email"
        name="contact"
        id="contact"
        placeholder="example@gmail.com"
      />
    )
  }

  if (method === 'Numero de telefono') {
    return (
      <PhoneInput
        inputProps={{
          name: 'phone',
          required: true,
        }}
        buttonStyle={buttonStyle}
        inputClass="input-country empty about__empty"
        dropdownStyle={dropdownStyle}
        inputStyle={style}
        country={'us'}
        onChange={(value, data, event) => {
          setState(() => {
            return {
              ...state,
              contact: event.target.value,
            }
          })
        }}
      />
    )
  }
}
