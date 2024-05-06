import { useState } from "react";
import {
  Head,
  Row,
  RowData,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TableMain,
  Th,
} from "./Table.styled";

const Table = () => {
  const [data, setData] = useState([{
    // id
  }])  

  return (
    <TableContainer>
      <Head>Statement</Head>
      <TableMain>
        <TableHead>
          <Row>
            <Th>Transaction ID</Th>
            <Th>Category</Th>
            <Th>Description</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Income/Expense</Th>
          </Row>
        </TableHead>
        <TableBody>
          <Row>
            <RowData>ORD-001-123456</RowData>
            <RowData>Web Design Template</RowData>
            <RowData>Design Assets</RowData>
            <RowData>March 25, 2021</RowData>
            <RowData>$ 495,00</RowData>
            <RowData>$5,00</RowData>
          </Row>
        </TableBody>
        <TableFooter />
      </TableMain>
    </TableContainer>
  );
};

export default Table;
