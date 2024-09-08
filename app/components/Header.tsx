"use client";
import { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

export default function Header() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Главная" value="1" component={Link} href="/" />
            <Tab label="Авторизация" value="2" component={Link} href="/login" />
            <Tab label="Магазин" value="3" component={Link} href="/store" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
