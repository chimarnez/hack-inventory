import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  TextField,
  Box,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

interface Column {
  id: "name" | "id" | "stock";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Producto", minWidth: 170 },
  { id: "id", label: "Código", minWidth: 100 },
  {
    id: "stock",
    label: "Stock",
    minWidth: 170,
    // align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

export const InventoryTable = (props: any) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows] = React.useState(props.data);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todos los productos</TableCell>
              <TableCell align="right">
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <SearchIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="Buscar producto"
                      variant="standard"
                    />
                  </Box>
                  <Button
                    sx={{ marginLeft: 1 }}
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    Nuevo producto
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell sx={{ width: 40 }} />
              <TableCell sx={{ width: 40 }} />
              <TableCell sx={{ width: 40 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, i: number) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={"row-" + i}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center" sx={{ width: 40, paddingY: 0 }}>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center" sx={{ width: 40, paddingY: 0 }}>
                      <IconButton size="small">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center" sx={{ width: 40, paddingY: 0 }}>
                      <IconButton size="small">
                        <SearchIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        labelRowsPerPage="Resultados por página: "
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
