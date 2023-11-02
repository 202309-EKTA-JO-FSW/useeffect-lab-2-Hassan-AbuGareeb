import { useState } from "react";

export default function Form({ onUserInput }) {
  const [input, setInput] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    onUserInput(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
    </form>
  );
}
