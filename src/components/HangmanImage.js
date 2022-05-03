import React from "react";
import picture from "../images/hangman.png"
import PropTypes from "prop-types";

function HangmanImage(props){
  const sizing = {
    width: "125px",
    height: "167px",
    objectFit: "none"
  };
  const imgStyle = (props.slice === 0) ? {objectPosition: "0% 0%"} :
    (props.slice === 1) ? {objectPosition: "33% 0%"} :
    (props.slice === 2) ? {objectPosition: "66% 0%"} :
    (props.slice === 3) ? {objectPosition: "0% 100%"} :
    (props.slice === 4) ? {objectPosition: "66% 100%"} : {objectPosition: "100% 100%"};

  return(
    <React.Fragment>
        <img src={picture} alt={"hangman slice " + props.slice} style={{...sizing, ...imgStyle}} />
    </React.Fragment>
  )
}

HangmanImage.propTypes = {
  slice: PropTypes.number
}

export default HangmanImage;