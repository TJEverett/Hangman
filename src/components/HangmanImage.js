import React from "react";
import picture from "../images/hangman.png"
import PropTypes from "prop-types";

function HangmanImage(props){
  const slice0 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "0% 0%"
  };
  const slice1 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "33% 0%"
  };
  const slice2 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "66% 0%"
  };
  const slice3 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "0% 100%"
  };
  const slice4 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "66% 100%"
  };
  const slice5 = {
    width: "125px",
    height: "167px",
    objectFit: "none",
    objectPosition: "100% 100%"
  };
  let imgStyle = (props.slice === 0) ? slice0 :
    (props.slice === 1) ? slice1 :
    (props.slice === 2) ? slice2 :
    (props.slice === 3) ? slice3 :
    (props.slice === 4) ? slice4 :
    (props.slice === 5) ? slice5 : {};

  return(
    <React.Fragment>
        <img src={picture} alt={"hangman slice " + props.slice} style={imgStyle} />
    </React.Fragment>
  )
}

HangmanImage.propTypes = {
  slice: PropTypes.number
}

export default HangmanImage;