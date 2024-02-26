import "./result.css";

const Result = ({ date }) => {
  return (
    <div className="result">
      <p>
        {date.year} <span>years</span>
      </p>
      <p>
        {date.month} <span>months</span>
      </p>
      <p>
        {date.day} <span>days</span>
      </p>
    </div>
  );
};

export default Result;
