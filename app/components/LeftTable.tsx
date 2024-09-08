"use client";
import { useEffect, useState } from "react";
import { fetchUsers, setPage } from "../redux/apiSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import convertTime from "../utils/convertTime";
import { UserItem } from "../types/types";

export default function LeftTable() {
  const dispatch = useAppDispatch();
  const { items, page, limit, total, offset, loading } = useAppSelector(
    (state) => state.users
  );

  const [users, setUsers] = useState<UserItem[]>(items);

  useEffect(() => {
    dispatch(fetchUsers({ limit, offset }));
  }, [dispatch, limit, offset]);

  useEffect(() => {
    setUsers(items);
  }, [items]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  const handleDelete = (id: number) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 190 },
    { field: "name", headerName: "Имя", width: 190 },
    { field: "role", headerName: "Роль", width: 190 },
    {
      field: "ctime",
      headerName: "Время",
      type: "number",
      width: 190,
      valueGetter: (params) => convertTime(params),
    },
    {
      field: "action",
      headerName: "Действие",
      width: 190,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDelete(params.row.id)}
        >
          Удалить
        </Button>
      ),
    },
  ];
  const paginationModel = { page: page - 1, pageSize: limit };

  return (
    <div>
      <h2>Список пользователей</h2>
      <Paper sx={{ position: "relative" }}>
        {loading === "loading" ? (
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
          <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[5]}
            paginationMode="server"
            rowCount={total}
            paginationModel={paginationModel}
            onPaginationModelChange={(newModel) =>
              handlePageChange(newModel.page + 1)
            }
            sx={{ border: 0 }}
          />
        )}
      </Paper>
    </div>
  );
}
