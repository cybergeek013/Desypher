import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Home.css";

function Home() {
  return (
    <Container>
      <h1>1) Caesar Cipher</h1>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is Caesar Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            The Caesar cipher is the simplest and oldest method of cryptography.
            The Caesar cipher method is based on a mono-alphabetic cipher and is
            also called a shift cipher or additive cipher. Julius Caesar used
            the shift cipher (additive cipher) technique to communicate with his
            officers. For this reason, the shift cipher technique is called the
            Caesar cipher. The Caesar cipher is a kind of replacement
            (substitution) cipher, where all letter of plain text is replaced by
            another letter.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Want to know working of Caesar Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                With a shift of 1, A would be replaced by B, B would become C,
                and so on.
              </li>
              <li>
                The encryption can be represented using modular arithmetic by
                first transforming the letters into numbers, according to the
                scheme, A = 0, B = 1,…, Z = 25.
              </li>
              <li>
                For example, if the shift is 3, then the letter A would be
                replaced by the letter D, B would become E, C would become F,
                and so on. The alphabet is wrapped around so that after Z, it
                starts back at A. To learn it more deeply you can refer{" "}
                <a
                  href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/"
                  target="_blank"
                >
                  Geeksforgeeks
                </a>
                .
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h1>2) Playfair Cipher</h1>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is Playfair Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            Playfair cipher is an encryption algorithm to encrypt or encode a
            message. It is the same as a traditional cipher. The only difference
            is that it encrypts a digraph (a pair of two letters) instead of a
            single letter.It initially creates a key-table of 5*5 matrix. The
            matrix contains alphabets that act as the key for encryption of the
            plaintext. Note that any alphabet should not be repeated. Another
            point to note that there are 26 alphabets and we have only 25 blocks
            to put a letter inside it. Therefore, one letter is excess so, a
            letter will be omitted (usually J) from the matrix. Nevertheless,
            the plaintext contains J, then J is replaced by I. It means treat I
            and J as the same letter, accordingly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Want to know working of Playfair Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Let's say, the plaintext MANGO has five letters. So, it is not
                possible to make a digraph. Since, we will append a letter Z at
                the end of the plaintext, i.e. MANGOZ.
              </li>
              <li>
                After that, break the plaintext into digraphs (pair of two
                letters). If any letter appears twice (side by side), put X at
                the place of the second occurrence.
              </li>
              <li>
                Suppose, the plaintext is COMMUNICATE then its digraph becomes
                CO MX MU NI CA TE. Similarly, the digraph for the plaintext JAZZ
                will be JA ZX ZX, and for plaintext GREET, the digraph will be
                GR EX ET. To learn it more deeply you can refer{" "}
                <a
                  href="https://www.geeksforgeeks.org/playfair-cipher-with-examples/"
                  target="_blank"
                >
                  Geeksforgeeks
                </a>
                .
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h1>3) Hill Cipher</h1>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is Hill Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            In classical cryptography, the hill cipher is a polygraphic
            substitution cipher based on Linear Algebra. It was invented by
            Lester S. Hill in the year 1929. In simple words, it is a
            cryptography algorithm used to encrypt and decrypt data for the
            purpose of data security.The algorithm uses matrix calculations used
            in Linear Algebra. It is easier to understand if we have the basic
            knowledge of matrix multiplication, modulo calculation, and the
            inverse calculation of matrices. In hill cipher algorithm every
            letter (A-Z) is represented by a number moduli 26. Usually, the
            simple substitution scheme is used where A = 0, B = 1, C = 2…Z = 25
            in order to use 2x2 key matrix.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Want to know working of Hill Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Let's say the key text (2x2) is DCDF. Convert this key using a
                substitution scheme into a 2x2 key matrix.
              </li>
              <li>
                Now, convert the plain text into vector form. Since the key
                matrix is 2x2, the vector must be 2x1 for matrix multiplication.
                (Suppose the key matrix is 3x3, a vector will be a 3x1 matrix.)
              </li>
              <li>
                Multiply the key matrix with each 2x1 plain text vector, and
                take the modulo of result (2x1 vectors) by 26. Then concatenate
                the results, and we get the encrypted or ciphertext as RGWL. To
                learn it more deeply you can refer{" "}
                <a
                  href="https://www.geeksforgeeks.org/hill-cipher/"
                  target="_blank"
                >
                  Geeksforgeeks
                </a>
                .
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h1>4) Vigenere Cipher</h1>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>What is Vigenere Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            The Vigenère cipher is a method of encrypting alphabetic text where
            each letter of the plaintext is encoded with a different Caesar
            cipher, whose increment is determined by the corresponding letter of
            another text, the key.For example, if the plaintext is attacking
            tonight and the key is OCULORHINOLARINGOLOGY, then the first letter
            a of the plaintext is shifted by 14 positions in the alphabet
            (because the first letter O of the key is the 14th letter of the
            alphabet, counting from 0), yielding o. the second letter t is
            shifted by 2 (because the second letter C of the key means 2)
            yielding v.the third letter t is shifted by 20 (U) yelding n, with
            wrap-around.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0" className="accord">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Want to know working of Vigenere Cipher ?</h4>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Let's say the plaintext is "GEEKSFORGEEKS" and keyword is
                "AYUSH", For generating key, the given keyword is repeated in a
                circular manner until it matches the length of the plain text.
              </li>
              <li>
                Now, The keyword "AYUSH" generates the key "AYUSHAYUSHAYU", The
                first letter of the plaintext, G is paired with A, the first
                letter of the key. So use row G and column A of the Vigenère
                square, namely G.
              </li>
              <li>
                Similarly, for the second letter of the plaintext, the second
                letter of the key is used, the letter at row E, and column Y is
                C. The rest of the plaintext is enciphered in a similar fashion.
                To learn it more deeply you can refer{" "}
                <a
                  href="https://www.geeksforgeeks.org/vigenere-cipher/"
                  target="_blank"
                >
                  Geeksforgeeks
                </a>
                .
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Home;
