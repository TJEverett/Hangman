import React from "react";
import PropTypes from "prop-types";

function HangmanSolution(props) {
  const h2Like = {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans- serif",
    fontWeight: "bold",
    fontSize: "1.5em"
  }

  return(
    <React.Fragment>
      <pre style={h2Like}>{props.display}</pre>
    </React.Fragment>
  )
}

HangmanSolution.propTypes = {
  display: PropTypes.string
}

export default HangmanSolution;