import { useState, Fragment } from 'react';
import './App.css';

declare global {
  interface Window { sendJsToWebView: any; }
}

function App() {

  const [fullName, setFullName] = useState(localStorage.getItem("fullName"));
  const [documentNumber, setDocumentNumber] = useState(localStorage.getItem("documentNumber"));
  const [ref_id, setRefId] = useState(localStorage.getItem("ref_id"));
  const [id_type, setIdType] = useState(localStorage.getItem("id_type"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [dateOfBirth, setDateOfBirth] = useState(localStorage.getItem("dateOfBirth"));
  const [placeOfBirth, setPlaceOfBirth] = useState(localStorage.getItem("placeOfBirth"));
  const [frontImg, setFrontImg] = useState(localStorage.getItem("frontImg"));
  const [backImg, setBackImg] = useState(localStorage.getItem("backImg"));
  const [faceImg, setFaceImg] = useState(localStorage.getItem("faceImg"));

  window.sendJsToWebView = (message: string) => {
    message = message.replace(/\\/g, "");
    const obj = JSON.parse(message, function (key, value) {

      if (key === "fullName") {
        setFullName(value);
        localStorage.setItem("fullName", value);

      } else if (key === "documentNumber") {
        setDocumentNumber(value);
        localStorage.setItem("documentNumber", value);

      } else if (key === "ref_id") {
        setRefId(value);
        localStorage.setItem("ref_id", value);

      } else if (key === "id_type") {
        setIdType(value);
        localStorage.setItem("id_type", value);

      } else if (key === "address") {
        setAddress(value);
        localStorage.setItem("address", value);

      } else if (key === "gender") {
        setGender(value);
        localStorage.setItem("gender", value);

      } else if (key === "dateOfBirth") {
        setDateOfBirth(value);
        localStorage.setItem("dateOfBirth", value);

      } else if (key === "placeOfBirth") {
        setPlaceOfBirth(value);
        localStorage.setItem("placeOfBirth", value);

      } else if (key === "frontImg") {
        setFrontImg(value);
        localStorage.setItem("frontImg", value);

      } else if (key === "backImg") {
        setBackImg(value);
        localStorage.setItem("backImg", value);

      } else if (key === "faceImg") {
        setFaceImg(value);
        localStorage.setItem("faceImg", value);
      }
    });
  }

  var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent);

  function openMyKadHtml() {
    if (ios) {
      eval("NativeApp.postMessage({'action': 'openEKycNRIC'});")
    } else {
      eval("Android.openEKycNRIC();")
    }

  };

  function openPassportHtml() {
    if (ios) {
      eval("NativeApp.postMessage({'action': 'openEKycPassport'});")
    } else {
      eval("Android.openEKycPassport();")
    }

  };

  function openTenteraHtml() {
    if (ios) {
      eval("NativeApp.postMessage({'action': 'openEKycTentera'});")
    } else {
      eval("Android.openEKycTentera();")
    }

  };

  function openFaceIDHtml() {
    if (ios) {
      eval("NativeApp.postMessage({'action': 'openEKycFace'});")
    } else {
      eval("Android.openEKycFace();")
    }
  };

  function clearData() {
    localStorage.clear();

    setFullName("");
    setDocumentNumber("");
    setRefId("");
    setIdType("");
    setAddress("");
    setGender("");
    setDateOfBirth("");
    setPlaceOfBirth("");
    setFrontImg("");
    setBackImg("");
    setFaceImg("");
  };

  return (
    <div className="container">
      <h1 className="header">Microsite Maxis</h1>

      <table>
        <tr>
          <td>
            <button onClick={openMyKadHtml} className="butn button-width" >
              MyKad
            </button>
          </td>
          <td>
            <button onClick={openPassportHtml} className="butn button-width" >
              Passport
            </button>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <button onClick={openTenteraHtml} className="butn button-width" >
              Tentera
            </button>
          </td>
          {fullName != null && fullName.length > 0
            ? <td>
              <button onClick={openFaceIDHtml} className="butn button-width" >
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
            <button onClick={clearData} className="butn button-width" >
              Clear Data
            </button>
          </td>

        </tr>
      </table>

      {frontImg != null && frontImg.length > 0
        ? <img id="inputFrontImg" className="inputImg" src={frontImg} height="150" width="200" />
        : null
      }

      {backImg != null && backImg.length > 0
        ? <img id="inputBackImg" className="inputImg" src={backImg} height="150" width="200" />
        : null
      }

      {faceImg != null && faceImg.length > 0
        ? <img id="inputFaceImg" className="inputFaceImg" src={faceImg} height="150" width="100" />
        : null
      }

      <input id="inputFieldName" className="inputKyc" type="text" placeholder="Name" disabled
        value=
        {fullName != null && fullName.length > 0
          ? fullName
          : ""
        } />

      <input id="inputFieldID" className="inputKyc" type="text" placeholder="ID" disabled
        value=
        {documentNumber != null && documentNumber.length > 0
          ? documentNumber
          : ""
        } />

      <input id="inputFieldRefID" className="inputKyc" type="text" placeholder="Ref ID" disabled
        value=
        {ref_id != null && ref_id.length > 0
          ? ref_id
          : ""
        } />

      <input id="inputFieldTypeID" className="inputKyc" type="text" placeholder="Type" disabled
        value=
        {id_type != null && id_type.length > 0
          ? id_type
          : ""
        } />

      <input id="inputFieldAddress" className="inputKyc" type="text" placeholder="Address" disabled
        value=
        {address != null && address.length > 0
          ? address
          : ""
        } />

      <input id="inputFieldGender" className="inputKyc" type="text" placeholder="Gender" disabled
        value=
        {gender != null && gender.length > 0
          ? gender
          : ""
        } />

      <input id="inputFieldDob" className="inputKyc" type="text" placeholder="DOB" disabled
        value=
        {dateOfBirth != null && dateOfBirth.length > 0
          ? dateOfBirth
          : ""
        } />

      <input id="inputFieldPlace" className="inputKyc" type="text" placeholder="POB" disabled
        value=
        {placeOfBirth != null && placeOfBirth.length > 0
          ? placeOfBirth
          : ""
        } />

    </div>
  );
}

export default App;