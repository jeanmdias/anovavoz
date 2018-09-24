import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="index.html">
        <img alt="Wingman" src="assets/img/logo-white.svg" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="icon-menu h4"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="pagesDropdown" role="button" data-toggle="dropdown"><b>A Nova Voz</b></a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">

              <a className="dropdown-item" href="pages-landing.html">
                <span className="h6 mb-0">Conheça o Projeto</span>
                <p className="text-small text-muted">Showcase your product in style</p>
              </a>

              <div className="dropdown-divider"></div>


              <a className="dropdown-item" href="pages-app.html">
                <span className="h6 mb-0">Ajude</span>
                <p className="text-small text-muted">Build detailed, functional web apps</p>
              </a>

            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="pagesDropdown" role="button" data-toggle="dropdown">Atividades Parlamentares</a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">

              <a className="dropdown-item" href="pages-landing.html">
                <span className="h6 mb-0">Senadores</span>
                <p className="text-small text-muted">Showcase your product in style</p>
              </a>

              <div className="dropdown-divider"></div>


              <a className="dropdown-item" href="pages-app.html">
                <span className="h6 mb-0">Dep. Federais</span>
                <p className="text-small text-muted">Build detailed, functional web apps</p>
              </a>

            </div>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="documentation/index.html" className="nav-link">Docs</a>
          </li>
          <li className="nav-item">
            <a href="documentation/changelog.html" className="nav-link">Changelog <span className="badge badge-secondary mr-2">v1.0.5</span></a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a href="https://www.facebook.com/useanovavoz" className="btn btn-success" target="blank">APOIE O PROJETO</a>
          </li>
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
