import React from 'react'

function footer() {
  return (
    <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            {/* Social Media Links */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://www.twitter.com"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://www.google.com"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://www.github.com"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <a className="text-body" href="https://mdbootstrap.com/">
         <h3>Thank You</h3> 
          </a>
        </div>
      </footer>
  )
}

export default footer
