// get the input value with the help of useState and ref hook only

import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setenteredPlayerName] = useState("");

  function handleClick() {
    setenteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unkown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// get the input value with the help of useState hook only this is here for only comparison
// import { useState } from "react";

// export default function Player() {
//   const [enteredPlayerName, setenteredPlayerName] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     setSubmitted(false);
//     setenteredPlayerName(event.target.value);
//   }

//   function handleClick() {
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : "unkown entity"}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
