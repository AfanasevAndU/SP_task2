import { useState } from "react";
import { Text } from "./shared/ui/text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Vite + React</Text>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
