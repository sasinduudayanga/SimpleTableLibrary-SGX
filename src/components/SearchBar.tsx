// src/components/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by Employee Name"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
