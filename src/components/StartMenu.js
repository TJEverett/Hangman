import React from "react";

function StartMenu(){
  function handleStartGame(event){
    event.preventDefault();
  }

  return(
    <React.Fragment>
      <form onSubmit={handleStartGame}>
        <input
          type="number"
          name="wordCount"
          min={1}
          max={5}
          step={1}
          defaultValue={1} />
        <button type="submit">Start Game</button>
      </form>
    </React.Fragment>
  );
}

export default StartMenu;