import { useEffect, useState, useCallback } from "react";
import { io } from "socket.io-client";
import { OnUpdateFunction, RowData } from "./types";

const socket = io("http://localhost:3001");

export function useTableDataLoad() {
  const limit = 200;

  const [rows, setRows] = useState<RowData[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setLoading(true);
    const res = await fetch(
      `http://localhost:3001/rows?offset=${offset}&limit=${limit}`
    );

    if (!res.ok) {
      setLoading(false);
      return;
    }

    const data: RowData[] = await res.json();

    setRows((prev) => [...prev, ...data]);
    setOffset((prev) => prev + limit);

    if (data.length < limit) setHasMore(false);

    setLoading(false);
  }, [offset, hasMore, isLoading]);

  const updateRow: OnUpdateFunction = async (id, field, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );

    await fetch(`http://localhost:3001/rows/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
  };

  const updateRowLocal = useCallback((updated: RowData) => {
    setRows(prev =>
      prev.map(r => (r.id === updated.id ? updated : r))
    );
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      loadMore();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on("rowUpdated", (row: RowData) => {
      updateRowLocal(row);
    });

    return () => {
      socket.off("rowUpdated");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rows, loadMore, updateRow, hasMore };
}
