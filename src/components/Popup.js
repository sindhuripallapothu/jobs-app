import React from "react";
import parse from "html-react-parser";

function Popup({ selected, closePopup }) {
  var description = selected.description.split("</p>").join("<br /><br />");
  var howToApply = selected.how_to_apply.split("</p>").join("<br /><br />");

  const handleCompanySite = () => {
    // window.location.open = selected.company_url;
    return (
      <a
        href={`https://cors-anywhere.herokuapp.com/+ ${selected.company_url}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  };
  return (
    <section className="popup">
      <div className="content" id="popuphtml">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <img
            src={selected.company_logo}
            alt="company_logo"
            style={{ height: "100px", width: "100px" }}
          />
          <button onClick={handleCompanySite} className="company_site">
            Company Site
          </button>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
        <br />
        <br />
        <div className="plot">
          <h2 style={{ position: "absolute", margin: "auto", left: "500px" }}>
            {selected.title}
          </h2>
        </div>
        <br />
        <br />
        {parse(description)}
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "150px",
            flexDirection: "column",
            backgroundColor: "#5865e0",
            color: "white",
          }}
        >
          <div>How to Apply?</div>
          <br />
          <br />
          <div>{parse(howToApply)}</div>
        </div>
        <br />
        <br />
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
