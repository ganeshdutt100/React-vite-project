import { useState } from "react"


export const NewClass = () => {
    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1);
    }
    function Sub(){
        setCount(count - 1);
    }
  return (
    <div className="d-flex gap-4">
            <button onClick={add}> ADD</button>
           
            <input type="text" value={count} size={4} />
            <button onClick={Sub}>SUB</button>
    </div>
  )
}
