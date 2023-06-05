import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Vigeneredecrypt from "./Vigeneredecrypt";
import "./Vigenere.css";

function Encryption() {
  // State variables
  const [plaintext, setPlaintext] = useState("");
  const [keyword, setKeyword] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  // Event handler for plaintext input change
  const handlePlaintextChange = (event) => {
    setPlaintext(event.target.value);
  };

  // Event handler for keyword input change
  const handleKeyChange = (event) => {
    setKeyword(event.target.value.toUpperCase());
  };

  // Event handler for encryption button click
  const handleEncryption = () => {
    const encryptedText = encrypt(plaintext, keyword);
    setCiphertext(encryptedText);
  };

  // Encryption function
  const encrypt = (text, key) => {
    const uppercaseText = text.toUpperCase();
    const uppercaseKey = key.toUpperCase();
    let encryptedText = "";

    let keyIndex = 0;
    for (let i = 0; i < uppercaseText.length; i++) {
      const char = uppercaseText[i];
      if (char === " ") {
        encryptedText += " ";
      } else {
        const charCode = uppercaseText.charCodeAt(i);
        const keyChar = uppercaseKey[keyIndex % uppercaseKey.length];
        const keyCharCode = keyChar.charCodeAt(0);
        const encryptedCharCode =
          ((charCode - 65 + (keyCharCode - 65)) % 26) + 65;
        encryptedText += String.fromCharCode(encryptedCharCode);

        keyIndex++;
      }
    }

    return encryptedText;
  };

  // JSX rendering
  return (
    <Container>
        <h1>Vigenere Cipher Encryption:</h1>
        <div className="maincontainer">
            <div className="Casercontainer">
              <h4>Enter Your Text: </h4>
              <textarea rows="10" cols="70" className="inputfield" placeholder="Enter text to encrypt..." type="text" value={plaintext} onChange={handlePlaintextChange} />
              <br />
              <h4>Enter Your Key: </h4>
              <input className="shiftfield" type="text" value={keyword} onChange={handleKeyChange} />
              <br />
              <button className=" btn btn-success" onClick={handleEncryption}>Encrypt</button>
            </div>
            <div className="outputfield">
                <h4>Encrypted Message: </h4> 
                <textarea rows="10" cols="70" className="inputfield" type="text" value={ciphertext}/>
            </div>
      </div>
      <br />
      <Vigeneredecrypt />
      </Container>
  );
}

export default Encryption;