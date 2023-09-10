import React, { useEffect } from 'react';

const Navbar = () => {
  
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
      // Return a cleanup function
      return () => {
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.removeEventListener(type, listener));
          } else {
            selectEl.removeEventListener(type, listener);
          }
        }
      };
    };

    const cleanup = on('click', '.mobile-nav-toggle', function(e) {
      console.log("e", e);
      select('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

    // Cleanup on component unmount
    return cleanup;
  }, []);

  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/Brandify-01.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Hamza Javaid</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://wa.me/923096382191" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
              <a href="https://www.facebook.com/BRANDIFY1" className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
              <a href="https://www.instagram.com/ha_designer191" className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
            </div>
          </div>

<<<<<<< HEAD
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
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
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
  <header id="header">
    <div className="d-flex flex-column"> <div className="profile">
        <img src="assets/img/Brandify-01.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Hamza Javaid</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://wa.me/923096382191" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
          <a href="https://www.facebook.com/BRANDIFY1" className="facebook" target='_blank'><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/ha_designer191" className="instagram" target='_blank'><i className="bx bxl-instagram"></i></a>
          {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
          {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
        </div>
      </div>

    <i className="bi bi-list mobile-nav-toggle  d-xl-none"></i>
      <nav id="navbar" className="nav-menu navbar" >
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          {/* <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
        </ul>
      </nav>
    </div>
  </header>



    
    </>)
=======
          <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
>>>>>>> branch-1
}

export default Navbar;
