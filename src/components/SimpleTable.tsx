import React, { ReactElement } from 'react';

// Define the structure of a coloumn in the table
interface ColumnDef {
  header: string;
  key: string;
  cellRenderer?: (data: Record<string, any>) => ReactElement;
}

// Define the props for the SimpleTable component
interface SimpleTableProps {
  columnDefs: ColumnDef[];
  data: Record<string, any>[];
}

// Define the SimpleTable component
const SimpleTable: React.FC<SimpleTableProps> = ({ columnDefs, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columnDefs.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnDefs.map((col) => (
              <td key={col.key}>
                {col.cellRenderer ? col.cellRenderer(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
