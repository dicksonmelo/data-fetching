import React, { useState, useEffect } from 'react'

function Fetching() {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json()).then((data) => setState(data))
  }, [])

  return (
    <div>
      <h2>Nome:</h2>
      {state.map(state => {
        return (
          <div>
            {state.name}
          </div>
        )
      })}
    </div>
  )
}
export default Fetching