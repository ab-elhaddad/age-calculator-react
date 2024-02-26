const FormGroup = ({ label, placeholder, error }) => {
  const red = "hsl(0, 87%, 67%)";
  const color = error ? red : undefined;
  return (
    <>
      <span className="form_group">
        <label htmlFor={label} className="label_1" style={{ color }}>
          {label.toUpperCase()}
        </label>
        <input
          type="number"
          id={label}
          placeholder={placeholder}
          style={{ borderColor: color }}
        />
        <label htmlFor={label} className="label_2">
          {error}
        </label>
      </span>
    </>
  );
};

export default FormGroup;
