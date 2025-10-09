// src/components/DynamicTableInput.js
import React from 'react';
import { useGetTableSelectData } from './useGetTableSelectData';

const DynamicTableInput = ({
  tsoId,
  tableName,
  columnsToFetch,
  displayColumns,
  inputId,
  width = '220',
  height = '700',
  placeholder = 'Click to load data',
  condition = {},
}) => {
  const getTableSelectData = useGetTableSelectData();

  const handleClick = () => {
    getTableSelectData(
      tsoId,
      tableName,
      columnsToFetch,
      displayColumns,
      width,
      height,
      inputId,
      condition 
    );
  };

  return (
    <input
      type="text"
      id={inputId}
      className="item_cinput_field tbl_select part_cd search_field"
      onClick={handleClick}
      autoComplete="off"
      readOnly
      placeholder={placeholder}
    />
  );
};

export default DynamicTableInput;
