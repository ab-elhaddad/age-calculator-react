import "./form.css";
import FormGroup from "./FormGroup";

const Input = ({ error }) => {
  return (
    <div className="form">
      <FormGroup label={"day"} placeholder={"DD"} error={error[0]} />
      <FormGroup label={"month"} placeholder={"MM"} error={error[1]} />
      <FormGroup label={"year"} placeholder={"YYYY"} error={error[2]} />
    </div>
  );
};

export default Input;
