import { CommonTable } from 'src/components/CommonTable/CommonTable';
import styles from './PagesPage.module.scss';
import { pagesUrl } from 'src/utils/constants';

export const PagesPage: React.FC = () => {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'active', label: 'Active' },
    { key: 'updatedAt', label: 'Updated At' },
    { key: 'publishedAt', label: 'Published At' }
  ];

  return (
    <section className={`${styles.pagesPage} section__container`}>
      <h2>Pages</h2>
      <CommonTable endpoint={pagesUrl} columns={columns} />
    </section>
  );
};
