import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
// import { Button } from "@mui/material";

// Generate Order Data
function createData(id, userid, fullname, status, product, amount) {
  return { id, userid, fullname, status, product, amount };
}

const rows = [
  createData(0, "0001", "Elvis Presley", "Active", "Game Server", 312.44),
  createData(1, "0002", "Paul McCartney", "Active", "Web Hosting", 866.99),
  createData(2, "0003", "Tom Scholz", "Non Active", "Virtual Server", 100.81),
  createData(3, "0004", "Michael Jackson", "Active", "Non Active", 654.39),
  createData(
    4,
    "0005",
    "Bruce Springsteen",
    "Non Active",
    "Virtual Server",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Product</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.userid}</TableCell>
              <TableCell>{row.fullname}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell align='right'>{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
