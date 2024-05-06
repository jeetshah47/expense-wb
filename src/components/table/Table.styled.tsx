import styled from "styled-components";

export const TableContainer = styled.div`
  flex: 1 1 auto;
  padding: 0px 40px 20px 40px;
  display: flex;
  flex-direction: column;
`;
export const Head = styled.p`
  color: white;
  font-size: 24px;
  flex: 0 1 initial;
`;

export const TableMain = styled.table`
  background-color: #28253b;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  border-radius: 20px;
  color: white;
`;

export const Th = styled.th`
  padding: 24px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const Row = styled.tr`
  /* background-color: #000; */
  border: 1px solid #ffffff;
`;

export const RowData = styled.td`
  padding: 24px;
  color: white;
  text-align: left;
`;

export const TableFooter = styled.tfoot``;
