import "./styles/NavBar.css"
import CartWidget from './CartWidget'; 

const NavBar = () => {
    const logo = "./public/img/tiger.png";
  return (
    <>
      <header className="posicion">
        <div className="container-fluid text-center contenedor">
          <h5>Envíos gratis</h5>
        </div>

        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid no-gutters">
            <img className="logo" src={logo} alt="Logo King On" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Colección
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#totoSanchez">
                      {" "}
                      Toto Sanchez{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#fabaEspinoza">
                      {" "}
                      Faba Espinoza{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#marianoCastiglioni">
                      {" "}
                      Mariano Castigloni
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#destacados">
                  {" "}
                  Destacados{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  {" "}
                  Contacto{" "}
                </a>
              </li>
            </ul>
            <form
              className="d-flex align-items-center p-1 justify-content-center"
              role="search"
            >
              <div id="iconos">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                    fill="currentColor"
                  />
                </svg>
                <div id="itemsEnCarrito">

                {/* Componente Cart */}

                <CartWidget/>

                </div>
                <a href="./login.html" aria-label="Mi usuario">
                  <svg
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M270.93,299.51H177.07C80.3,299.51,1.58,378.23,1.58,475a34.75,34.75,0,0,0,34.71,34.71H411.71A34.75,34.75,0,0,0,446.42,475C446.42,378.23,367.7,299.51,270.93,299.51ZM56.84,455.94A121.88,121.88,0,0,1,177.07,353.28h93.86A121.88,121.88,0,0,1,391.15,455.94ZM224,259.42A128.7,128.7,0,0,0,352.56,130.86C352.56,60,294.89,2.29,224,2.29S95.44,60,95.44,130.86A128.7,128.7,0,0,0,224,259.42Zm0-203.36a74.8,74.8,0,1,1-74.79,74.8A74.88,74.88,0,0,1,224,56.06Z"
                      transform="translate(-1.58 -2.29)"
                    ></path>
                  </svg>
                </a>
              </div>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
