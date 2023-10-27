import github from "../img/github.svg";
import linkedIn from "../img/linkedIn.svg"

const styles = {
  IconStyle: {
    height: '4rem',
    width: "4rem",
  },
  containerStyle: {
    display: 'flex',
    gap: '2rem'
  }
}

export default function Footer() {
  return (
    <>
    {/* icons are brought in from the img folder in src. They are svg's */}
      <div style={styles.containerStyle}>
        {/* links are set to open in another page */}
        <a href="https://github.com/Ch40s1" target="blank"><img src={github} alt="GitHub Icon" style={styles.IconStyle} /></a>
        <a href="https://www.linkedin.com/in/daniel-zarate-66816113b/" target="blank"> <img src={linkedIn} alt="Linked-In Icon" style={styles.IconStyle} /></a>
      </div>
    </>
  );
}
