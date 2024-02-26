import "./separator.css";
import validateDate from "./../utility/validateDate";
import calculateAge from "./../utility/calculateAge";

const Separator = ({ setDate, setError }) => {
  const handleClick = () => {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    const validationResult = validateDate({ year, month, day });
    if (!validationResult[0] && !validationResult[1] && !validationResult[2]) {
      setDate(calculateAge({ year, month, day }));
    } else {
      setError(validationResult);
    }
  };
  return (
    <div className="separator">
      <div className="line"></div>
      <img src="./images/icon-arrow.svg" alt="Arrow" onClick={handleClick} />
    </div>
  );
};

export default Separator;
