import React from "react";
import PropTypes from "prop-types";

function StartMenu(props){

  function handleStartGame(event){
    event.preventDefault();
    props.onSubmit(parseInt(event.target.wordCount.value));
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

StartMenu.propTypes = {
  onSubmit: PropTypes.func
}

export default StartMenu;