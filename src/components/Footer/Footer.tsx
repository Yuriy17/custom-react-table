import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address className="author">
        By{' '}
        <a className='link' rel="author" href="https://www.linkedin.com/in/yuriyshilenkov/">
          Yuriy Shilenkov
        </a>
      </address>
    </footer>
  );
}