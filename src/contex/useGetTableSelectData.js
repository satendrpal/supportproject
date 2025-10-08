// src/utils/useGetTableSelectData.js
import axios from 'axios';
import { useModal } from './ModalContext';

export const useGetTableSelectData = () => {
  const { showModal } = useModal();

  const getTableSelectData = async (
    tsoId,
    tableName,
    columnsToFetch,
    displayColumns,
    width = '220',
    height = '700',
    inputId,
    condition={}
  ) => {
    try {
      const res = await axios.post( `${process.env.REACT_APP_API_URL}/gettableselction`, {
        tsoId,
        tableName,
        columnName: columnsToFetch,
        condition,
      });

      if (res.data.success) {
        showModal({
          title: `${tsoId}_${tableName}`,
          data: res.data.data,
          inputId:`${inputId}`
        });
      } else {
        alert('No data found.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch data.');
    }
  };

  return getTableSelectData;
};
