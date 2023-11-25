import React, { ReactElement, useState } from 'react';

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

    // State for column filters
    const [filters, setFilters] = useState<Record<string, string | null>>({});

    // Function to update filters
    const updateFilter = (key: string, value: string | null) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [key]: value,
      }));
    };
  
    // Apply filters to data
    const filteredData = data.filter((row) =>
      Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        return filterValue === null || String(row[key]).toLowerCase() === filterValue.toLowerCase();
      })
    );

  return (
    <table>
      <thead>
        <tr>
          {columnDefs.map((col) => (
            <th key={col.key}>
              {col.header}
              {col.key === 'manager_decision' && ( // Check if column is "Manager Decision"
                <div>
                  <select
                    value={filters['manager_decision'] || ''}
                    onChange={(e) => updateFilter('manager_decision', e.target.value || null)}
                  >
                    <option value="">All</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Declined">Declined</option>
                  </select>
                </div>
              )
              }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, rowIndex) => (
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
