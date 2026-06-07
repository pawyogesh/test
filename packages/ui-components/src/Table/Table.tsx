import React from "react";
import { colors, spacing, borderRadius, typography, shadows } from "@societyhub/design-tokens";

interface TableProps<T extends Record<string, any>> {
  columns: Array<{
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (value: any, row: T) => React.ReactNode;
  }>;
  data: T[];
  onRowClick?: (row: T) => void;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps<any>>((
  { columns, data, onRowClick },
  ref
) => {
  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: typography.fontFamily.base,
  };

  const headerStyles = {
    backgroundColor: colors.neutral[100],
    borderBottom: `2px solid ${colors.neutral[200]}`,
    textAlign: "left" as const,
    padding: spacing[4],
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.neutral[700],
  } as React.CSSProperties;

  const rowStyles = {
    borderBottom: `1px solid ${colors.neutral[200]}`,
    ":hover": {
      backgroundColor: colors.neutral[50],
    },
    cursor: "pointer",
  };

  const cellStyles = {
    padding: spacing[4],
    fontSize: typography.fontSize.base,
    color: colors.neutral[700],
  } as React.CSSProperties;

  return (
    <table style={tableStyles} ref={ref}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} style={headerStyles}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr
            key={idx}
            style={rowStyles}
            onClick={() => onRowClick?.(row)}
          >
            {columns.map((col) => (
              <td key={String(col.key)} style={cellStyles}>
                {col.render
                  ? col.render(row[col.key], row)
                  : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
});

Table.displayName = "Table";