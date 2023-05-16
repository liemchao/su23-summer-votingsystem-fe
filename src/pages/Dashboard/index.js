import React, { useEffect, useState } from "react";
import CardInfo from "../../components/Cards/Info";

import PageHeading from "../../components/PageHeading";

import { Link, Redirect } from "react-router-dom";
import ApiService from "../../api/apiService";


const Dashboard = () => {



  const user = JSON.parse(localStorage.getItem("user"));




  useEffect(() => {
    if (!user || user.Roles === "") {
      return <Redirect to="/Login" />;

    } else {
      
    }
  }, []);



  return (
    <>
      {(user.role.includes("Moderator")) && (
        <>
          <PageHeading title="Performance dasboard" />

        

            <div className="row">

              <div className="col-lg-5">
                <div className="card">
                  <div className="card-body">
                    <Link style={{ textDecoration: "none" }} to="/Dashboard/Manager/AccountList">
                      <CardInfo
                        title="Lead (To Customer)"
                        icon="calendar"
                        color="primary"
                        com=":1"
                      >
                      </CardInfo>
                    </Link>
                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/KPIList">

                      <CardInfo

                        title="Revenue"
                        icon="calendar"
                        color="primary"
                      >

                      </CardInfo>
                    </Link>


                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                      <CardInfo
                        title="Negotiation"
                        icon="calendar"
                        color="dark"
                      />
                    </Link>
                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                      <CardInfo title="Wins" icon="clipboard" color="info"  />
                    </Link>
                    <Link style={{ textDecoration: "none" }}
                      to="/Dashboard/Manager/OpportunityList">
                      <CardInfo
                        title="Loses"
                        icon="comments"
                        color="danger"
                       
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
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
              </div>
            </div>



         



        </>

      )}

      {(user.role.includes("Admin")) && (
        <>
          <PageHeading title="Account dashboard" />

        



        </>

      )}


    </>
  );
}
export default Dashboard;
