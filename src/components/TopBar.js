import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import ApiService from "../../src/api/apiService";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

import 'react-toastify/dist/ReactToastify.css';

const Topbar = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Người dùng đã đăng nhập
        setUser(user);
        console.log(user)
      } else {
      //   // Người dùng đã đăng xuất
      //   setUser(null);
      }
    });

    // Hủy đăng ký lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);
  // const user = JSON.parse(localStorage.getItem("user"));

  // if (!user) {
  //   return <Redirect to="/Login" />;
  // }

  const handleLogout = () => {
    ApiService.Logout();
    firebase.auth().signOut();
    history.push("/");
  }
 
 


  return (
   
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">

        <div style={{ marginTop: "4%" }} >

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon style={{ height: "70%", width: "60%", marginLeft: "10%", marginBottom: "30%" }} icon={faBell} />
                 
            </a>

            <ToastContainer/>
            <div style={{ overflow: "auto", maxHeight: "14rem", scrollbarWidth: "none" }}
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              {/* <div className="row">
                <Button style={{ marginLeft: "10%", border: "2px solid white " }}>
                  All
                </Button>
                 
                <Button style={{ marginLeft: "10%", border: "2px solid white" }}>
                  UnRead

                </Button>

              </div> */}




            </div>



          </li>

        </div>
        <div className="topbar-divider d-none d-sm-block">


        </div>
        {/* User Information */}
       
        <li className="nav-item dropdown no-arrow">

          <a
            className="nav-link dropdown-toggle"
            href="/#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {user.email}
            </span>
            <img
              className="img-profile rounded-circle"
               src={user.photoURL}
              alt="user_imge"
            />
          </a>
        
       
            
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/Dashboard/MyProfile">
              <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>  Profile

            </Link>
            <div className="dropdown-divider"></div>
            <Button
              onClick={handleLogout}
              className="dropdown-item"
            >
              <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> Logout

            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
