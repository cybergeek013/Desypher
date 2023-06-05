import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Caser.css";


function CaesarCipherDecrypt() {
    const [encryptedMessage, setEncryptedMessage] = useState("");
  const [shift, setShift] = useState(0);
  const [decryptedMessage, setDecryptedMessage] = useState("");

  const handleDecrypt = () => {
    const decrypted = decryptMessage(encryptedMessage, shift);
    setDecryptedMessage(decrypted);
  };

  const decryptMessage = (message, shift) => {
    let decryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let currentChar = message[i];

      if (currentChar.match(/[a-z]/i)) {
        let base = currentChar === currentChar.toUpperCase() ? "A" : "a";
        let decryptedChar = String.fromCharCode(
          ((currentChar.charCodeAt(0) - base.charCodeAt(0) - shift + 26) % 26) +
            base.charCodeAt(0)
        );
        decryptedMessage += decryptedChar;
      } else {
        decryptedMessage += currentChar;
      }
    }

    return decryptedMessage;
  };

  return (
    <Container>
        <h1>Caesar Cipher Decryption:</h1>
        <div className="maincontainer">
            <div className="Casercontainer">
                <h4>Enter Your Text: </h4>
                <textarea rows="10" cols="70" className="inputfield" placeholder="Enter text to decrypt..." type="text" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} />
                <br />
                <h4>Shift Value: </h4>
                <input min={0} max={25} className="shiftfield" type="number" value={shift} onChange={(e) => setShift(Number(e.target.value))} />
                <br />
                <button className=" btn btn-danger" onClick={handleDecrypt}>Decrypt</button>
            </div>
            <div className="outputfield">
                <h4>Decrypted Message: </h4> 
                <textarea rows="10" cols="70" className="inputfield" type="text" value={decryptedMessage}/>
            </div>
        </div>


    </Container>
  );
}

export default CaesarCipherDecrypt;
