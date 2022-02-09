import styled, { keyframes } from "styled-components";

const TableStyle = styled.table`
  border: 1px solid #dee2e6;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
  thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    border-bottom-width: 2px;
    border: 1px solid #dee2e6;
  }
  td,
  th {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    vertical-align: top;
    vertical-align: middle;
  }
`;

export { TableStyle };
