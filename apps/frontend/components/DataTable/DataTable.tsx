import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { getColumns } from "./columns";
import { OnUpdateFunction, RowData } from "./types";

import {
  TableContainer,
  HeaderRow,
  HeaderCell,
  RowWrapper,
  Cell,
} from "./styles";

interface Props {
  rows: RowData[];
  onUpdate: OnUpdateFunction;
  loadMore: () => void;
  hasMore: boolean;
}

export default function DataTable({
  rows,
  onUpdate,
  loadMore,
  hasMore,
}: Props) {
  const columns = getColumns(onUpdate);

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 10,
  });

  const handleScroll = () => {
    const el = parentRef.current;
    if (!el) return;

    const bottom = el.scrollHeight - el.scrollTop - el.clientHeight;

    if (bottom < 300 && hasMore) loadMore();
  };

  return (
    <TableContainer ref={parentRef} onScroll={handleScroll}>
      <HeaderRow>
        {table.getFlatHeaders().map((header) => (
          <HeaderCell key={header.id}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </HeaderCell>
        ))}
      </HeaderRow>

      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
          width: "fit-content",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = table.getRowModel().rows[virtualRow.index];

          return (
            <RowWrapper
              key={row.id}
              style={{ transform: `translateY(${virtualRow.start}px)` }}
            >
              {row.getVisibleCells().map((cell) => (
                <Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Cell>
              ))}
            </RowWrapper>
          );
        })}
      </div>
    </TableContainer>
  );
}
