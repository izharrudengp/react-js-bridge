import React, { Component } from "react";
import "./App.css"

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  openMyKadHtml = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.assign("open-mykad.html");

  };

  openPassportHtml = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.assign("open-passport.html");

  };

  openTenteraHtml = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.assign("open-tentera.html");

  };

  openFaceIDHtml = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.assign("open-faceid.html");
  };

  clearData = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    localStorage.clear();
    this.setState({});
  };

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (

      <div className="container">
        <h1 className="header">Microsite Maxis</h1>

        <table>
          <tr>
            <td>
              <button onClick={this.openMyKadHtml} className="butn button-width" >
                MyKad
              </button>
            </td>
            <td>
              <button onClick={this.openPassportHtml} className="butn button-width" >
                Passport
              </button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <button onClick={this.openTenteraHtml} className="butn button-width" >
                Tentera
              </button>
            </td>
            {localStorage.getItem("fullName") != null && localStorage.getItem("fullName")!.length > 0
              ? <td>
                <button onClick={this.openFaceIDHtml} className="butn button-width" >
                  Face ID
                </button>
              </td>
              : null
            }

          </tr>
        </table>

        <table>
          <tr>
            <td>
              <button onClick={this.clearData} className="butn button-width-clear" >
                Clear Data
              </button>
            </td>
          </tr>
        </table>

        <input id="inputField" className="input" type="text" value="" disabled />

        {localStorage.getItem("frontImg") != null && localStorage.getItem("frontImg")!.length > 0
          ? <img id="inputFrontImg" className="inputImg" src={localStorage.getItem("frontImg")!} height="150" width="200" />
          : null
        }

        {localStorage.getItem("backImg") != null && localStorage.getItem("backImg")!.length > 0
          ? <img id="inputBackImg" className="inputImg" src={localStorage.getItem("backImg")!} height="150" width="200" />
          : null
        }

        {localStorage.getItem("faceImg") != null && localStorage.getItem("faceImg")!.length > 0
          ? <img id="inputFaceImg" className="inputFaceImg" src={localStorage.getItem("faceImg")!} height="100" width="80" />
          : null
        }

        <input id="inputFieldName" className="inputKyc" type="text" placeholder="Name" disabled
          value=
          {localStorage.getItem("fullName") != null && localStorage.getItem("fullName")!.length > 0
            ? localStorage.getItem("fullName")!
            : ""
          } />

        <input id="inputFieldID" className="inputKyc" type="text" placeholder="ID" disabled
          value=
          {localStorage.getItem("documentNumber") != null && localStorage.getItem("documentNumber")!.length > 0
            ? localStorage.getItem("documentNumber")!
            : ""
          } />

        <input id="inputFieldRefID" className="inputKyc" type="text" placeholder="Ref ID" disabled
          value=
          {localStorage.getItem("ref_id") != null && localStorage.getItem("ref_id")!.length > 0
            ? localStorage.getItem("ref_id")!
            : ""
          } />

        <input id="inputFieldTypeID" className="inputKyc" type="text" placeholder="Type" disabled
          value=
          {localStorage.getItem("id_type") != null && localStorage.getItem("id_type")!.length > 0
            ? localStorage.getItem("id_type")!
            : ""
          } />

        <input id="inputFieldAddress" className="inputKyc" type="text" placeholder="Address" disabled
          value=
          {localStorage.getItem("address") != null && localStorage.getItem("address")!.length > 0
            ? localStorage.getItem("address")!
            : ""
          } />

        <input id="inputFieldGender" className="inputKyc" type="text" placeholder="Gender" disabled
          value=
          {localStorage.getItem("gender") != null && localStorage.getItem("gender")!.length > 0
            ? localStorage.getItem("gender")!
            : ""
          } />

        <input id="inputFieldDob" className="inputKyc" type="text" placeholder="DOB" disabled
          value=
          {localStorage.getItem("dateOfBirth") != null && localStorage.getItem("dateOfBirth")!.length > 0
            ? localStorage.getItem("dateOfBirth")!
            : ""
          } />

        <input id="inputFieldPlace" className="inputKyc" type="text" placeholder="POB" disabled
          value=
          {localStorage.getItem("placeOfBirth") != null && localStorage.getItem("placeOfBirth")!.length > 0
            ? localStorage.getItem("placeOfBirth")!
            : ""
          } />

      </div>
    );
  }
};

export default App;
