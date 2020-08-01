import React, { useState } from 'react'

// uses destructuring instead of props.getQuery to access the useEfect hook in App.js
const Search = ( {getQuery}) => {

  // use state hook
  const [text, setText] = useState('');

  // sets the user input as both the search query in App.js
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  }

  return (
    <section className="search">
      <form>
        <input 
          type='text' 
          className="form-control" 
          placeholder="Search Characters" 
          value={text}
          onChange={(e) => onChange(e.target.value) }
          autoFocus />
      </form>
    </section>
  )
}

export default Search
