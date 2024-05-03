import { CommonTable } from 'src/components/CommonTable/CommonTable';
import styles from './PricePlansPage.module.scss';
import { pricePlansUrl } from 'src/utils/constants';

export const PricePlansPage: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'description', label: 'Description' },
    { key: 'active', label: 'Active' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'removedAt', label: 'Removed At' }
  ];

  return (
    <section className={`${styles.pricePlansPage} section__container`}>
      <h2>Price Plans</h2>
      <CommonTable endpoint={pricePlansUrl} columns={columns} />
    </section>
  );
};
