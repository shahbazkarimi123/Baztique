import { useState } from "react"

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1 className="text-red-500 font-bold">This is home page</h1>
    </div>

  )
}

export default HomePage