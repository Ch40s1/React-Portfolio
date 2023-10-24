import '../style/imports.css'

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


export default function About() {
  return (
    <div style={styles.containerStyle} className='d-flex gap-5'>
      <div>
        <h1 style={styles.letterStyle.fontStyle}>Full-Stack-Developer</h1>
        <p style={styles.letterStyle.paragraphStyle}>
          I'm Daniel Zarate, a web developer based in the US. I create beautiful and functional websites.
        </p>
      </div>
      <div>
        <img src="src/img/TestAvatar.JPG" alt="My Self" style={styles.imageStyle} />
      </div>
    </div>
  );
}
