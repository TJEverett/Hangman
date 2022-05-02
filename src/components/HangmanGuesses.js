import React from "react";
import CustomButton from "./CustomButton";

function HangmanGuesses(props){
  const unit = "1fr ";
  const table = {
    display: "grid",
    gridTemplateRows: unit.repeat(2),
    gridTemplateColumns: unit.repeat(13)
  };

  const letters = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let buttonArray = [{value: "A", disabled: true}, {value: "B", disabled: true}];
  for(let i = 2; i < letters.length; i++){
    buttonArray.push({value: letters[i], disabled: false});
  }

  return(
    <React.Fragment>
      <div style={table}>
        {buttonArray.map((buttonData) => 
          <CustomButton display={buttonData.value} disabled={buttonData.disabled} key={buttonData.value} />
        )}
      </div>
    </React.Fragment>
  )
}

export default HangmanGuesses;