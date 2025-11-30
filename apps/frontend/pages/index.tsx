import DataTable from "../components/DataTable/DataTable";
import { useTableDataLoad } from "../components/DataTable/useTableDataLoad";

export default function HomePage() {
  const { rows, updateRow, loadMore, hasMore } = useTableDataLoad();

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h2>Guru Table</h2>

      <DataTable
        rows={rows}
        onUpdate={updateRow}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </div>
  );
}
