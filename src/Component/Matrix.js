import React, { useState } from 'react';

const Matrix = () => {
    const [matrix, setMatrix] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]);     
      
      const resetButton=()=>setMatrix(
        [ [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]])
      const handleBoxClick = (row, col) => {
        if(row===2 && col===2) 
        {
            handleBoxColor()
            return
        }
        const updatedMatrix = [...matrix];
        updatedMatrix[row][col] = 1;
        setMatrix(updatedMatrix);
        
      };
      const handleBoxColor = () => {
       matrix.map((row,rowIndex)=>
       {
            row.map((col,colIndex)=>
            {
                if(col===1)
                {
                    const updatedMatrix = [...matrix];
                    updatedMatrix[rowIndex][colIndex] = 2;
                    setMatrix(updatedMatrix);
                }
             
             
               
            })
       })
      };



  

  return (
    <div className="matrix">
    {matrix.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((box, colIndex) => {
          
          return (
            <div
              key={colIndex}
              className={`box ${
                box===0 && " "}
                ${
                    box===1 && "green"}
                    ${
                        box===2 && "orange"}
                `}
              onClick={() => handleBoxClick(rowIndex, colIndex)}
            />
          );
        })}
      </div>
    ))}   
    <button onClick={resetButton}>Reset</button>
  </div>
  );
};

export default Matrix;
