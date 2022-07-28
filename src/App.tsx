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

  const [handshake_key, setHandshake] = useState(localStorage.getItem("handshake_key"));
  const [key_exp, setKeyExp] = useState(localStorage.getItem("key_exp"));
  const [lat, setLat] = useState(localStorage.getItem("lat"));
  const [long, setLong] = useState(localStorage.getItem("long"));
  const [device_id, setDeviceId] = useState(localStorage.getItem("device_id"));
  const [device_model, setDeviceModel] = useState(localStorage.getItem("device_model"));
  const [ip_address, setIpAddress] = useState(localStorage.getItem("ip_address"));

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

      } else if (key === "handshake_key") {
        setHandshake(value);
        localStorage.setItem("handshake_key", value);

      } else if (key === "key_exp") {
        setKeyExp(value);
        localStorage.setItem("key_exp", value);

      } else if (key === "lat") {
        setLat(value);
        localStorage.setItem("lat", value);

      } else if (key === "long") {
        setLong(value);
        localStorage.setItem("long", value);

      } else if (key === "device_id") {
        setDeviceId(value);
        localStorage.setItem("device_id", value);

      } else if (key === "device_model") {
        setDeviceModel(value);
        localStorage.setItem("device_model", value);

      } else if (key === "ip_address") {
        setIpAddress(value);
        localStorage.setItem("ip_address", value);

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

  function openDeviceDetails() {
    if (ios) {
      eval("NativeApp.postMessage({'action': 'openDeviceDetails'});")
    } else {
      eval("Android.openDeviceDetails();")
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

    setHandshake("");
    setKeyExp("");
    setLat("");
    setLong("");
    setDeviceId("");
    setDeviceModel("");
    setIpAddress("");
  };

  return (
    <div className="container">
      <h1 className="header">Microsite Option</h1>

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
          <td>
            <button onClick={openTenteraHtml} className="butn button-width" >
              Tentera
            </button>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          
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
            <button onClick={openDeviceDetails} className="butn button-width" >
              Device Details
            </button>
          </td>
          <td>
            <button onClick={clearData} className="butn button-width" >
              Clear Data
            </button>
          </td>
        </tr>
      </table>

      <h2 className="label">Device Details</h2>

      <input id="inputFieldHandshake" className="inputKyc" type="text" placeholder="Handshake key" disabled
        value=
        {handshake_key != null && handshake_key.length > 0
          ? handshake_key
          : ""
        } />

      <input id="inputFieldKey" className="inputKyc" type="text" placeholder="Key exp" disabled
        value=
        {key_exp != null && key_exp.length > 0
          ? key_exp
          : ""
        } />

      <input id="inputFieldLat" className="inputKyc" type="text" placeholder="Lat" disabled
        value=
        {lat != null && lat.length > 0
          ? lat
          : ""
        } />

      <input id="inputFieldLong" className="inputKyc" type="text" placeholder="Long" disabled
        value=
        {long != null && long.length > 0
          ? long
          : ""
        } />

      <input id="inputFieldDeviceId" className="inputKyc" type="text" placeholder="Device ID" disabled
        value=
        {device_id != null && device_id.length > 0
          ? device_id
          : ""
        } />

      <input id="inputFieldDeviceModel" className="inputKyc" type="text" placeholder="Device Model" disabled
        value=
        {device_model != null && device_model.length > 0
          ? device_model
          : ""
        } />

      <input id="inputFieldIpAddress" className="inputKyc" type="text" placeholder="Ip Address" disabled
        value=
        {ip_address != null && ip_address.length > 0
          ? ip_address
          : ""
        } />



      <h2 className="label">EKyc Details</h2>

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