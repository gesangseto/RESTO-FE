import { CButton, CCol, CContainer, CInputGroup, CRow } from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();
  const handleClickLogout = () => {
    localStorage.clear();
    history.push("/empty");
    history.replace("/login");
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-muted float-left">
                The page you are looking for was not found.
              </p>
            </div>
            <CInputGroup className="input-prepend">
              <CButton color="info" onClick={() => window.history.back()}>
                Back
              </CButton>
              &nbsp;
              <CButton color="danger" onClick={() => handleClickLogout()}>
                Re-Login
              </CButton>
              &nbsp;
              <CButton
                color="success"
                onClick={() => history.push(`/dashboard`)}
              >
                Go To Dashboard
              </CButton>
              &nbsp;
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page404;
