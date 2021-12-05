import React from 'react';

const Score = props => {
  const scores = props.score.map((ele, index) => {
    return(
    <div>
    <p>Score: {ele.score} Date: {ele.date}</p>
    </div>
    )
  }) 
  return(
    <div>
      {scores}
    </div>
  )
}

export default Score 