import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnO_VKzyOmS4JJKf-GCMXxFx9sRK_SB-8GcX_WpH8FY_JC7WLI0SW&usqp=CAE&s"
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <span className="navbar-brand mb-0 h2">Sae Ma Eul Klang</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="navbar-text" style={{color: 'dark'}}>The Landmark</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
