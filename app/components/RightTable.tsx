"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addMessage } from "../redux/websocketSlice";
import convertTime from "../utils/convertTime";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";

export default function Main() {
  const dispatch = useAppDispatch();
  const [wsMessages, setWsMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket("wss://test.dev-relabs.ru/event");

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setWsMessages((prevMessages) => [...prevMessages, message]);
      dispatch(addMessage(message));
      if (loading) setLoading(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return (
    <div>
      <h2>События</h2>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ height: 400 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Время</TableCell>
                <TableCell>Событие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wsMessages.map((message) => (
                <TableRow key={message.ctime}>
                  <TableCell style={{ width: 300 }}>
                    {convertTime(message.ctime)}
                  </TableCell>
                  <TableCell style={{ width: 300 }}>{message.event}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
