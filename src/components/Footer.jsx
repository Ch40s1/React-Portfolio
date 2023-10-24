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
      <div style={styles.containerStyle}>
        <a href="https://github.com/Ch40s1" target="blank"><img src="src/img/github.svg" alt="GitHub Icon" style={styles.IconStyle} /></a>
        <a href="https://www.linkedin.com/in/daniel-zarate-66816113b/" target="blank"> <img src="src/img/linkedIn.svg" alt="Linked-In Icon" style={styles.IconStyle} /></a>
      </div>
    </>
  );
}
