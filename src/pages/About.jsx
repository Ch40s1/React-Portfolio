// import the css file for the font and media queries. Also import the images for when uploading to live production
import '../style/imports.css'
import TestAvatar from '../img/TestAvatar.png'

//these are styles for the jsx
const styles = {
  imageStyle: {
    height: '25rem',
    width: "25rem",
    borderRadius: '50%',
    border: '3px solid #000',
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

// This is the home page
export default function About() {
  return (
    <div className='d-lg-flex gap-5 justify-content-center d-sm-block custom-margin'>
      <div>
        <h1 style={styles.letterStyle.fontStyle}>Full-Stack-Developer</h1>
        <p style={styles.letterStyle.paragraphStyle}>
          I'm Daniel Zarate, a web developer based in the US. I create beautiful websites.
        </p>
      </div>
      <div>
        {/* image uses import name */}
        <img src={TestAvatar} alt="My Self" style={styles.imageStyle} />
      </div>
    </div>
  );
}
