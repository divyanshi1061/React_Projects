import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //Use useRef to keep track of the previous state of password and coping password
  const passwordRef = useRef("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:',.<>?";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    // Use the Clipboard API to copy the password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // Generate password when component mounts or when dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-8 py-5 my-8 text-orange-400 bg-gray-700 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow-2xl rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3  bg-amber-50"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 hover:bg-sky-700 text-white px-3 py-0.5 shrink-0 cursor-pointer "
      >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />{" "}
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label>Charaters</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
