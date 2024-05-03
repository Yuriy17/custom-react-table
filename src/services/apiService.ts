export const fetchData = async <T>(url: string): Promise<T[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonData: T[] = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
