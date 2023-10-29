function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center bg-dark p-3 fixed-bottom  ">
        <p className="text-light text-center m-auto">
          Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
}

export default Footer;
