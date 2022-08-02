import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const workers = [
  { name: "Wanda", lastname: "Maximoff", workdays: 17, wage: 500 },
  { name: "Clint", lastname: "Barton", workdays: 20, wage: 520 },
  { name: "Sam", lastname: "Wilson", workdays: 10, wage: 535 },
  { name: "Jessica", lastname: "Jones", workdays: 5, wage: 540 },
  { name: "Phil", lastname: "Coulson", workdays: 9, wage: 560 },
  { name: "Nick", lastname: "Fury", workdays: 8, wage: 580 },
  { name: "Stephen", lastname: "Strange", workdays: 13, wage: 585 },
  { name: "Peter", lastname: "Quill", workdays: 21, wage: 590 },
  { name: "Matt", lastname: "Murdock", workdays: 2, wage: 600 },
  { name: "Peggy", lastname: "Carter", workdays: 18, wage: 620 },
  { name: "Scott", lastname: "Lang", workdays: 2, wage: 630 },
  { name: "Bruce", lastname: "Banner", workdays: 5, wage: 650 },
  { name: "Natasha", lastname: "Romanoff", workdays: 7, wage: 670 },
  { name: "Peter", lastname: "Parker", workdays: 27, wage: 700 },
  { name: "Tony", lastname: "Stark", workdays: 15, wage: 800 },
  { name: "Steve", lastname: "Rogers", workdays: 20, wage: 800 },
];

export default function BasicTable() {
  return (
    <TableContainer className="tb1" component={Paper}>
      <Table className="tb" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell id="title1">Names</TableCell>
            <TableCell id="title1" align="right">
              Last Names
            </TableCell>
            <TableCell id="title1" align="right">
              Work Days
            </TableCell>
            <TableCell id="title1" align="right">
              Wage
            </TableCell>
            <TableCell id="title1" align="right">
              Salary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => (
            <TableRow
              key={worker.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell id="title" component="th" scope="row">
                {worker.name}
              </TableCell>
              <TableCell id="title" align="right">
                {worker.lastname}
              </TableCell>
              <TableCell id="title" align="right">
                {worker.workdays}
              </TableCell>
              <TableCell id="title" align="right">
                {worker.wage}
              </TableCell>
              <TableCell id="title" align="right">
                {worker.wage * worker.workdays}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
