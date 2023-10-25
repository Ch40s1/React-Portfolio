import { useState } from 'react';
import Modal from '../components/Modal';

function Contact() {
  const [inputs, setInputs] = useState({});
  const [openModal, setOpenModal] = useState(false)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Name
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={ () =>
        setOpenModal(true)
      }>show modal
      </button>
   {openModal && <Modal closeModal={setOpenModal} />}
    </>
  )
}

export default Contact;
