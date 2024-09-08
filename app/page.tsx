"use client";
import Header from "./components/Header";
import LeftTable from "./components/LeftTable";
import RightTable from "./components/RightTable";
import { useEffect, useState } from "react";
import redirectToLogin from "./utils/redirectToLogin";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");

    if (authStatus === null || authStatus === "false") {
      redirectToLogin();
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <LeftTable />
        <RightTable />
      </div>
    </>
  );
}
