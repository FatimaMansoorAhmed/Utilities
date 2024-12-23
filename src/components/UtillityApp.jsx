import React from "react";
import { useState } from "react";
const UtilityApp = () => {
    
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
  
    
    const handleUppercase = () => {
      setOutputText(inputText.toUpperCase());
    };
  
    
    const handleLowercase = () => {
      setOutputText(inputText.toLowerCase());
    };
  
    const handlecapitaleCase = () => {
      const changetext = inputText.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      setOutputText(changetext);
    };
  

    const handleReset = () => {
      setInputText('');
      setOutputText('');
    };
  
    return (
      <div>
        <h1>Text Conversion Utility</h1>
  
        
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here"/>
  
        
        <div>
          <button onClick={handleUppercase}>Uppercase</button>
          <button onClick={handleLowercase}>Lowercase</button>
          <button onClick={handlecapitaleCase}>Capitalize</button>
        </div>

        <button onClick={handleReset}>Reset</button>
  
        
        <div>
          <h3>Output:</h3>
          <p>{outputText}</p>
        </div>
      </div>
    );
  };
  
  export default UtilityApp;

