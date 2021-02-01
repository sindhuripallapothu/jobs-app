import React from "react";
import parse from "html-react-parser";

function PopupMock({ closePopup }) {
  const selected = {
    id: "7cbcbf10-f5ed-4f80-b2dd-7e565c9dd9af",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/7cbcbf10-f5ed-4f80-b2dd-7e565c9dd9af",
    created_at: "Fri Jan 29 01:06:58 UTC 2021",
    company: "Secureframe",
    company_url: "https://secureframe.com",
    location: "San Francisco or Remote",
    title: "Software Engineer",
    description:
      "<p><a href=\"https://secureframe.com/\">Secureframe</a> is on a mission to make the most powerful security simple and accessible for every organization. Getting secure can take months, slowing a company's speed-to-market and sales. We believe security---when done right---should accelerate innovation and growth. That's why we started Secureframe.</p>\n<p>Secureframe is backed by top VCs including <a href=\"https://gradient.com/\">Gradient Ventures</a> (Google's AI Fund), Base10, BoxGroup, Village Global, and many more.</p>\n<p>This role can be in San Francisco or Remote. Secureframe is fully remote till at least June 2021.</p>\n<h3>What you'll do</h3>\n<ul>\n<li>Scope, design, and implement new end-to-end functionality</li>\n<li>Contribute to codebases in Ruby, Typescript, and Go</li>\n<li>Help architect core parts of our infrastructure from the ground up</li>\n<li>Work closely with designers and product managers to solve ambiguous user challenges</li>\n</ul>\n<h3>Who we're looking for</h3>\n<ul>\n<li>2+ years of experience working with modern programming languages like Ruby, Javascript, Python, etc.</li>\n<li>Strong understanding of computer science fundamentals</li>\n<li>Ability to communicate and collaborate effectively</li>\n<li>Passion and ability to work well in a fast-paced, rapidly changing environment</li>\n</ul>\n<h3>Benefits</h3>\n<ul>\n<li>Medical, dental, and vision benefits for you and your dependent(s)</li>\n<li>Unlimited PTO</li>\n<li>401(k)</li>\n<li>Paid family leave</li>\n<li>Ground floor opportunity as an early member of the team</li>\n</ul>\n<p><em>Secureframe is an equal opportunity employer. We aim to create an environment where every team member at Secureframe feels like they belong so they can have a greater impact on our business and customers. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</em></p>\n<p>Secureframe is fully remote until at least June 2021. We are committed to the health and safety of our employees and will not require employees to be in our office(s) until a vaccine is widely available.</p>\n",
    how_to_apply:
      '<p><a href="https://jobs.lever.co/secureframe/020d7563-b902-4002-9a82-ee2c77d0f8c0?lever-origin=applied&amp;lever-source%5B%5D=GitHub">Apply Here</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXlYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34d3fdfa508617db088f05bd635cf8164a6dccf/logo.gif",
  };

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
          <button onClick={handleCompanySite} className="company_site" >
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
            width: "150px",
            height: "150px",
            flexDirection: "column",
            backgroundColor: "#5865e0",
            color: "white",
          }}
        >
          <div>How to Apply?</div>
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

export default PopupMock;
