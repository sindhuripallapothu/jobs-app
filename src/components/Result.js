import React from "react";

function Result({ result, openPopup }) {
  const timeLapsed = Math.floor(
    (Date.now() - new Date(result.created_at)) / 3600000
  );
  const time =
    timeLapsed >= 24
      ? Math.floor(timeLapsed / 24) > 1
        ? `${Math.floor(timeLapsed / 24)} days ago`
        : `${Math.floor(timeLapsed / 24)} day ago`
      : `${timeLapsed} hours ago`;
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      <p>
        <span>
          {time} {" . "}
          {result.type}
        </span>
      </p>
      <img src={result.company_logo} alt="company_logo" />
      <p>{result.title}</p>
      <p>{result.company}</p>
      <p>{result.location}</p>
    </div>
  );
}

export default Result;
