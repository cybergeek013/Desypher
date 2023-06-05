import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Vigenere.css";

function Decryption() {
  // State variables
  const [ciphertext, setCiphertext] = useState("");
  const [keyword, setKeyword] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  // Event handler for ciphertext input change
  const handleCiphertextChange = (event) => {
    setCiphertext(event.target.value);
  };

  // Event handler for keyword input change
  const handleKeyChange = (event) => {
    setKeyword(event.target.value.toUpperCase());
  };

  // Event handler for decryption button click
  const handleDecryption = () => {
    const decryptedText = decrypt(ciphertext, keyword);
    setDecryptedText(decryptedText);
  };

  // Decryption function
  const decrypt = (text, key) => {
    const uppercaseText = text.toUpperCase();
    const uppercaseKey = key.toUpperCase();
    let decryptedText = "";

    let keyIndex = 0;
    for (let i = 0; i < uppercaseText.length; i++) {
      const char = uppercaseText[i];
      if (char === " ") {
        decryptedText += " ";
      } else {
        const charCode = uppercaseText.charCodeAt(i);
        const keyChar = uppercaseKey[keyIndex % uppercaseKey.length];
        const keyCharCode = keyChar.charCodeAt(0);
        const decryptedCharCode =
          ((charCode - 65 - (keyCharCode - 65) + 26) % 26) + 65;
        decryptedText += String.fromCharCode(decryptedCharCode);

        keyIndex++;
      }
    }

    return decryptedText;
  };

  // JSX rendering
  return (
    <Container>
        <h1>Vigenere Cipher Decryption:</h1>
        <div className="maincontainer">
            <div className="Casercontainer">
              <h4>Enter Your Text: </h4>
              <textarea rows="10" cols="70" className="inputfield" placeholder="Enter text to decrypt..." type="text" value={ciphertext} onChange={handleCiphertextChange} />
              <br />
              <h4>Enter Your Key: </h4>
              <input className="shiftfield" type="text" value={keyword} onChange={handleKeyChange} />
              <br />
              <button className=" btn btn-danger" onClick={handleDecryption}>Decrypt</button>
            </div>
            <div className="outputfield">
                <h4>Decrypted Message: </h4> 
                <textarea rows="10" cols="70" className="inputfield" type="text" value={decryptedText}/>
            </div>
      </div>
      </Container>
  );
}


export default Decryption;