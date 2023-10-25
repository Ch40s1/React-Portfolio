import { useState } from 'react';
import Modal from '../components/Modal';

function Contact() {
  const [inputs, setInputs] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = inputs.username;
    setUsername(data)
    setOpenModal(true)
  }

  return (
    <>
      <form>
        <label> Name
          <input
            type='text'
            name='username'
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={handleSubmit}> show modal </button>
      {openModal && <Modal closeModal={setOpenModal} username={username}/>}
    </>
  )
}

export default Contact;
