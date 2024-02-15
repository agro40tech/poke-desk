import { FC, useEffect, useMemo, useState } from "react";

import { MaterialUISwitch } from "04-Entities";

export const ToggleChangeTheme: FC = () => {
  const body = useMemo(() => document.querySelector("body"), []);
  const cacheTheme = useMemo(() => localStorage.getItem("theme"), []);

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Проверка на наличие сохраненной темы в кеше
  useEffect(() => {
    if (cacheTheme) {
      switch (cacheTheme) {
        case "light":
          setChecked(false);
          break;
        case "dark":
          setChecked(true);
          break;
      }
    }
  }, [cacheTheme]);

  // Смена темы по нажатию на toggle
  useEffect(() => {
    if (checked) {
      body?.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      if (body?.classList.contains("theme-dark")) {
        body?.classList.remove("theme-dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [checked, body]);

  return (
    <>
      <MaterialUISwitch onChange={handleChange} checked={checked} sx={{ m: 1 }} />
    </>
  );
};
