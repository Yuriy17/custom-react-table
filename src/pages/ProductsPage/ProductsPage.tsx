import { CommonTable } from 'src/components/CommonTable/CommonTable';
import styles from './ProductsPage.module.scss';
import { productUrl } from 'src/utils/constants';

export const ProductsPage: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'size', label: 'Size' },
    { key: 'amount', label: 'Amount' },
    { key: 'active', label: 'Active' },
    { key: 'createdAt', label: 'Created At' }
  ];

  return (
    <section className={`${styles.productsPage} section__container`}>
      <h2>Products</h2>
      <CommonTable endpoint={productUrl} columns={columns} />
    </section>
  );
};
