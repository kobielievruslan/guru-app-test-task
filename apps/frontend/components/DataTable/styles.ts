import styled from "@emotion/styled";

export const TableContainer = styled.div`
  overflow: auto;
  height: 800px;
  border: 1px solid #ddd;
  font-family: Inter, sans-serif;
  position: relative;
  will-change: transform;
`;

export const HeaderRow = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: #fafafa;
  z-index: 3;
`;

export const HeaderCell = styled.div`
  min-width: 180px;
  padding: 4px;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  background: #fafafa;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const RowWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: fit-content;
`;

export const Cell = styled.div`
  min-width: 180px;
  padding: 4px;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  background: white;
  font-size: 14px;
  display: flex;
  align-items: center;
`;