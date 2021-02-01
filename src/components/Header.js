import React, { useState } from "react";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import FlareIcon from "@material-ui/icons/Flare";
import Switch from "@material-ui/core/Switch";

const Header = (prop) => {
  const { handleTheme } = prop;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    handleTheme();
    setChecked(event.target.checked);
  };

  const style = {
    position: "absolute",
    right: "100px",
    top: "35px",
  };
  return (
    <div id="colouredPanel">
      <div id="switchPanel" style={style}>
        <FlareIcon />
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary"
          name="checkedA"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <Brightness3Icon />
      </div>
    </div>
  );
};

export default Header;
