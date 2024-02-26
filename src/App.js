import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Separator from "./components/Separator";

function App() {
  const [date, setDate] = useState({ year: "--", month: "--", day: "--" });
  const [error, setError] = useState([null, null, null]);
  return (
    <div className="container">
      <Form error={error} />
      <Separator setDate={setDate} setError={setError} />
      <Result date={date} />
    </div>
  );
}

export default App;
