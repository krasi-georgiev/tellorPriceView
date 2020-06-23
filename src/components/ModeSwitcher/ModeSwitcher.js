import React, { useState, useEffect } from "react";
import { BulbOutlined } from "@ant-design/icons";
import TellorLogoDark from "../../assets/Tellor__Logo--Dark.png";
import TellorLogoLight from "../../assets/Tellor__Logo--Light.png";

const darkThemePropertiesMap = {
  background: "#000",
  "background-2": "#252525",
  "color-primary-1": "#5cfcb6",
  "color-primary-2": "#baffe1",
  "color-primary-3": "#99ffd1",
  "color-primary-4": "#37f3a1",
  "color-primary-5": "#00ff8f",
  "color-secondary-1": "#777777",
  "color-secondary-2": "#444444",
  "color-table-thead": "00ff8f",
  "color-heading": "#00ff8f",
  "color-link": "#5cfcb6",
  "modal-color-background": "#444444",
  "modal-color-btn-default": "#5cfcb6",
};

const lightThemePropertiesMap = {
  background: "#fff",
  "background-2": "#fff",
  "color-primary-1": "#5cfcb6",
  "color-primary-2": "#252525",
  "color-primary-3": "#99ffd1",
  "color-primary-4": "#37f3a1",
  "color-primary-5": "#00ff8f",
  "color-secondary-1": "#777777",
  "color-secondary-2": "#444444",
  "color-table-thead": "#000",
  "color-heading": "#000",
  "color-link": "#000",
  "modal-color-background": "#fff",
  "modal-color-btn-default": "#000",
};

const ModeSwitcher = ({ setLogo }) => {
  const [theme, setTheme] = useState({
    theme: "dark",
    themePropertiesMap: darkThemePropertiesMap,
  });

  useEffect(() => {
    for (const property in theme.themePropertiesMap) {
      if (theme.themePropertiesMap[property]) {
        setThemeProperty(property, theme.themePropertiesMap[property]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.themePropertiesMap]);

  const switchTheme = () => {
    const isDarkTheme = theme.theme === "dark";

    setTheme({
      theme: isDarkTheme ? "light" : "dark",
      themePropertiesMap: isDarkTheme
        ? lightThemePropertiesMap
        : darkThemePropertiesMap,
    });

    setLogo(isDarkTheme ? TellorLogoLight : TellorLogoDark);
  };

  const setThemeProperty = (name, value) => {
    document.documentElement.style.setProperty(`--${name}`, value);
  };

  return (
    <>
      <BulbOutlined onClick={() => switchTheme()} />
    </>
  );
};

export default ModeSwitcher;
