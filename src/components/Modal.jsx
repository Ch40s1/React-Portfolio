import '../style/modal.css';
import '../style/imports.css';

const styles = {
  imageStyle: {
    height: '25rem',
    width: "25rem",
    borderRadius: '50%',
    border: '3px solid #000',
  },
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

export default function Modal({closeModal}) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle" style={styles.letterStyle.fontStyle}>
            <h2>Contact</h2>
          </div>
          <div className="modalBody" style={styles.letterStyle.paragraphStyle}>
           <p> Thank you for submiting </p>
          </div>
          <div className="modalFooter" style={styles.letterStyle.paragraphStyle}>
            <button onClick={() => closeModal(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
}
