import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CaesarCipherDecrypt from "./Caserdecrypt";
import "./Caser.css";


function EncryptMessage(message, shift) {
//for encryption
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char.match(/[a-z]/i)) {
      let code = message.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    encryptedMessage += char;
  }
  return encryptedMessage;
}

function Caser() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(0);
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleEncrypt = () => {
    const encrypted = EncryptMessage(message, shift);
    setEncryptedMessage(encrypted);
  };

  return (
    <Container>
        <h1>Caesar Cipher Encryption:</h1>
        <div className="maincontainer">
            <div className="Casercontainer">
                <h4>Enter Your Text: </h4>
                <textarea rows="10" cols="70" className="inputfield" placeholder="Enter text to encrypt..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <br />
                <h4>Shift Value: </h4>
                <input min={0} max={25} className="shiftfield" type="number" value={shift} onChange={(e) => setShift(parseInt(e.target.value))} />
                <br />
                <button className=" btn btn-success" onClick={handleEncrypt}>Encrypt</button>
            </div>
            <div className="outputfield">
                <h4>Encrypted Message: </h4> 
                <textarea rows="10" cols="70" className="inputfield" type="text" value={encryptedMessage}/>
            </div>
        </div>
        <br />
        <CaesarCipherDecrypt/>       

    </Container>
  );
}

export default Caser;
