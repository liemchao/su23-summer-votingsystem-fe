import React, { useEffect, useState } from "react";
import CardInfo from "../../components/Cards/Info";

import PageHeading from "../../components/PageHeading";

// import { Link, Redirect } from "react-router-dom";
// import ApiService from "../../api/apiService";



const Dashboard = () => {




  // const user = JSON.parse(localStorage.getItem("user"));




  // useEffect(() => {
  //   if (!user || user.Roles === "") {
  //     return <Redirect to="/Login" />;

  //   } else {
      
  //   }
  // }, []);



  return (
    <>
      {/* {(user.role.includes("Moderator")) && ( */}
        <>
          <PageHeading title="Performance dasboard" />

        

            <div className="row">
                  <CardInfo
                    title="Earnings (Monthly)"
                    icon="calendar"
                    color="primary"
                    value="$40,000"
                  />

                  <CardInfo
                    title="Earnings (Annual)"
                    icon="calendar"
                    color="success"
                    value="215,000"
                  />

                  <CardInfo
                    title="Tasks"
                    icon="clipboard"
                    color="info"
                    value="50%"
                  />

                  <CardInfo
                    title="Pending Requests"
                    icon="comments"
                    color="warning"
                    value="18"
                  />
                </div>

              {/* <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                  <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                    <CardInfo
                      title="Lead(To Opportunity Ratio)"
                      icon="calendar"
                      color="primary"
                 
                      com="%"
                    ></CardInfo>
                    </Link>

                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                      <CardInfo
                        title="Opportunity (To Win Ratio)"
                        icon="calendar"
                        color="primary"
                        com="%"
                      ></CardInfo>
                    </Link>

                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/LeadList">
                      <CardInfo
                        title="Leads"
                        icon="calendar"
                        color="warning"
                      />
                    </Link>

                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                      <CardInfo
                        title="Opportunitties"
                        icon="calendar"
                        color="success"
                      />
                    </Link>

                  </div>

                </div>
              </div> */}



         



        </>

      {/* // )} */}

      {/* {(user.role.includes("Admin")) && ( */}
        <>

        



        </>

      {/* )} */}


    </>
  );
}
export default Dashboard;
