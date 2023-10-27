import { useState } from 'react';
import Modal from '../components/Modal';

const styles = {
  buttonStyle: {
    borderRadius: '10px',
    color: 'white',
    background: 'blue'
  },
}

// main function, houses all contact logic
function Contact() {

  // uses different states for eac data
  const [inputs, setInputs] = useState({});
  // we dont want the modal to have a set state so we use false
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setUserText] = useState('');

  // hnadles the state change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // sets any input to its corresponding value.
    setInputs(values => ({ ...values, [name]: value }));
  };

  //
  const handleSubmit = (event) => {
    // prevent default because it is a form
    event.preventDefault();
    // gets the input and assigns it to a variable
    const newName = inputs.username;
    // email is assigned but not yet used
    const newEmail = inputs.email;
    const newMessage = inputs.message;
    // checks is the forms are empty
    if (!newName && !newEmail && !newMessage) {
      alert("Please enter valid information");
      // if the above pases then it checks to make sure the email is valid by using email regex
    } else {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      // if the email does not match the regex then it fails
      if (!emailRegex.test(newEmail)) {
        alert("Please enter a valid email");
      } else {
        // else all states for each form is set the inputs. And opens modal
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
          <label className='col-sm-12 col-md-7 col-lg-4'> Name <br />
          {/* input holds the name and value of the corresponding form*/}
            <input
              type='text'
              name='username'
              value={inputs.username || ''}
              onChange={handleChange}
              className='col-12'
            />
          </label>
          <label className='col-sm-12 col-md-7 col-lg-4'> Email <br />
            <input
              type='text'
              name='email'
              value={inputs.email || ''}
              onChange={handleChange}
              className='col-12'
            />
          </label>
          <label className='col-sm-12 col-md-7 col-lg-4'> Message <br />
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
          {/* the button sets a prop with the state of the form labels these are use in when it calls for the modal */}
          <button onClick={handleSubmit}  style={styles.buttonStyle}> Submit </button>
          {openModal && <Modal closeModal={setOpenModal} username={username} useremail={userEmail} usertext={message}/>}
        </div>
      </div>
    </>
  )
}

export default Contact;
