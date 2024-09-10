"use client";
import { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useAppDispatch } from "../redux/hooks";
import { clearMessages } from "../redux/websocketSlice";

export default function Header() {
  const [value, setValue] = useState("1");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function handleLogout() {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      localStorage.setItem("isAuthenticated", "false");
      dispatch(clearMessages());
    }
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Главная" value="1" component={Link} href="/" />
            <Tab
              label="Авторизация"
              value="2"
              component={Link}
              href="/login"
              onClick={handleLogout}
            />
            <Tab label="Магазин" value="3" component={Link} href="/store" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
