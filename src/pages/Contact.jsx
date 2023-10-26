import { useState } from 'react';
import Modal from '../components/Modal';

const styles = {
  buttonStyle: {
    borderRadius: '10px',
    color: 'white',
    background: 'blue'
  },
}

function Contact() {
  const [inputs, setInputs] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setUserText] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = inputs.username;
    const newEmail = inputs.email;
    const newMessage = inputs.message;
    if (!newName && !newEmail && !newMessage) {
      alert("Please enter valid information");
    } else {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(newEmail)) {
        alert("Please enter a valid email");
      } else {
        setUsername(newName);
        setUserEmail(newEmail);
        setUserText(newMessage);
        setOpenModal(true);
      }
    }
  };



  return (
    <>
      <div className='d-flex align-items-center justify-content-center mt-5 flex-column' >
        <h1>Go ahead and contact me!</h1>
        <form className='d-flex flex-column align-items-center col-12 mt-5'>
          <label className='col-2'> Name <br />
            <input
              type='text'
              name='username'
              value={inputs.username || ''}
              onChange={handleChange}
              className='col-12'
            />
          </label>
          <label className='col-2'> Email <br />
            <input
              type='text'
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
              className='col-12'
            />
          </label>
          <label className='col-2'> Message <br />
            <input
              type='text'
              name='message'
              value={inputs.message || ""}
              onChange={handleChange}
              className='col-12'
            />
          </label>

        </form>
        <div className='mt-3'>
          <button onClick={handleSubmit}  style={styles.buttonStyle}> Submit </button>
          {openModal && <Modal closeModal={setOpenModal} username={username} useremail={userEmail} usertext={message}/>}
        </div>
      </div>
    </>
  )
}

export default Contact;
