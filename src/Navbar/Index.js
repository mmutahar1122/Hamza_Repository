import React from 'react'

const Navbar = () => {
  return (
    <>
  {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
  {/* <nav class="navbar"> */}
  {/* <div class="container-fluid"></div> */}
 {/* <a class="navbar-brand" href="#">Navbar</a> */}
    {/* <button class="navbar-toggler mobile-nav-toggle bi-list d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    </nav> */}
    <i className="bi bi-list mobile-nav-toggle  d-xl-none"></i>
  <header id="header">
    <div className="d-flex flex-column"> <div className="profile">
        <img src="assets/img/Brandify-01.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Hamza Javaid</a></h1>
        <div className="social-links mt-3 text-center">
          {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
          <a href="https://www.facebook.com/BRANDIFY1" className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/ha_designer191" className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
          {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
          {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar" >
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>



    
    </>)
}

export default Navbar;