import { useEffect, useState } from 'react';
import styles from './CommonTable.module.scss';
import { fetchData } from 'src/services/apiService';
import { Loader } from 'react-feather';

interface Column<T> {
  key: keyof T;
  label: string;
}

interface CommonTableProps<T> {
  endpoint: string; // API endpoint to fetch data from
  columns: Column<T>[];
}

export const CommonTable = <T,>({ endpoint, columns }: CommonTableProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTableData = async () => {
      setLoading(true);
      try {
        const tableData = await fetchData<any>(endpoint);

        setData(tableData.map((item) => {
          const { options, ...rest } = item;
          
          return {...options, ...rest}
        }));
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error loading data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, [endpoint]);
  return (
    <div className={styles.tableContainer}>
      {loading ? (
        <div className={styles.loader}>
          <Loader size={70} className='loader' />
        </div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <table className={styles.commonTable}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {
                      typeof item[column.key] === 'boolean'
                        ? item[column.key]
                          ? 'Yes'
                          : 'No'
                        : String(item[column.key]) /* Ensure content is a string */
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
