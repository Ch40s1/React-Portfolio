// imports modal
import '../style/modal.css';
import '../style/imports.css';

const styles = {
  containerStyle: {
    marginTop: '10rem',
  },
  letterStyle: {
    fontStyle: {
      fontWeight: '900',
      fontSize: '4rem',
      fontFamily: 'Roboto, sans-serif',
    },
    paragraphStyle: {
      fontFamily: 'Mulish, sans-serif',
      letterSpacing: '1.2px',
      lineHeight: '1.6rem',
    }
  }

}

// modal for when submittin the form. Takes in several props. Each carries over the data from the state
export default function Modal({closeModal, username, useremail, usertext}) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle" style={styles.letterStyle.fontStyle}>
            <h2>Contact</h2>
          </div>
          {/* display the username  */}
          <div className="modalBody" style={styles.letterStyle.paragraphStyle}>
           <p> Thank you {username} for submiting </p>
          </div>
          <div className="modalFooter" style={styles.letterStyle.paragraphStyle}>
            <button onClick={() => closeModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
}
