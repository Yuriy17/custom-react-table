import styles from './IntroPage.module.scss'

export const IntroPage = () => {


  return (
    <section className={`${styles.introPage} section__container`}>
      <h2>Home Page</h2>
      <p>Welcome to the web app that using React, Typescript, Vite, Sass stack to draw tables with various data, possibility to edit and filter options </p>
      <p>To navigate click on link in navigation panel</p>
    </section>
  );
}

