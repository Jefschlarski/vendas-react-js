import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;