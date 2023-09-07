import React from 'react'

const Footer = () => {
  return (
    <main id="main">
    
     {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>iPortfolio</span></strong>
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. --> */}
        {/* <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

  {/* <!-- End  Footer --> */}
  <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    
    </main>
  )
}

export default Footer;