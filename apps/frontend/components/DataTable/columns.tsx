import { createColumnHelper } from "@tanstack/react-table";
import { OnUpdateFunction, RowData } from "./types";
import TextCell from "./inputs/TextCell";
import NumberCell from "./inputs/NumberCell";
import SelectCell from "./inputs/SelectCell";
import BooleanCell from "./inputs/BooleanCell";
import DateCell from "./inputs/DateCell";

const col = createColumnHelper<RowData>();

export function getColumns(onUpdate: OnUpdateFunction) {
  return [
    col.accessor("text", {
      header: "Text",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "text", v)}
        />
      ),
    }),

    col.accessor("number", {
      header: "Number",
      cell: (info) => (
        <NumberCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "number", v)}
        />
      ),
    }),

    col.accessor("select", {
      header: "Select",
      cell: (info) => (
        <SelectCell
          value={info.getValue()}
          options={["A", "B", "C"]}
          onCommit={(v) => onUpdate(info.row.original.id, "select", v)}
        />
      ),
    }),

    col.accessor("status", {
      header: "Status",
      cell: (info) => (
        <SelectCell
          value={info.getValue()}
          options={["todo", "in-progress", "done"]}
          onCommit={(v) => onUpdate(info.row.original.id, "status", v)}
        />
      ),
    }),

    col.accessor("category", {
      header: "Category",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "category", v)}
        />
      ),
    }),

    col.accessor("priority", {
      header: "Priority",
      cell: (info) => (
        <NumberCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "priority", v)}
        />
      ),
    }),

    col.accessor("flagged", {
      header: "Flagged",
      cell: (info) => (
        <BooleanCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "flagged", v)}
        />
      ),
    }),

    col.accessor("owner", {
      header: "Owner",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "owner", v)}
        />
      ),
    }),

    col.accessor("rating", {
      header: "Rating",
      cell: (info) => (
        <NumberCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "rating", v)}
        />
      ),
    }),

    col.accessor("tag", {
      header: "Tag",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "tag", v)}
        />
      ),
    }),

    col.accessor("description", {
      header: "Description",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "description", v)}
        />
      ),
    }),

    col.accessor("note", {
      header: "Note",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "note", v)}
        />
      ),
    }),

    col.accessor("email", {
      header: "Email",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "email", v)}
        />
      ),
    }),

    col.accessor("phone", {
      header: "Phone",
      cell: (info) => (
        <TextCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "phone", v)}
        />
      ),
    }),

    col.accessor("createdAt", {
      header: "Created At",
      cell: (info) => (
        <DateCell
          value={new Date(info.getValue())}
          onCommit={(v) => onUpdate(info.row.original.id, "createdAt", v)}
        />
      ),
    }),

    col.accessor("updatedAt", {
      header: "Updated At",
      cell: (info) => (
        <DateCell
          value={new Date(info.getValue())}
          onCommit={(v) => onUpdate(info.row.original.id, "updatedAt", v)}
        />
      ),
    }),

    col.accessor("amount", {
      header: "Amount",
      cell: (info) => (
        <NumberCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "amount", v)}
        />
      ),
    }),

    col.accessor("percentage", {
      header: "Percentage",
      cell: (info) => (
        <NumberCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "percentage", v)}
        />
      ),
    }),

    col.accessor("isActive", {
      header: "Active",
      cell: (info) => (
        <BooleanCell
          value={info.getValue()}
          onCommit={(v) => onUpdate(info.row.original.id, "isActive", v)}
        />
      ),
    }),
  ];
}
