import { NavLinkWithActiveClass } from "src/components/Navigation/NavLinkWithActiveClass";
import { routesArray } from "src/components/Navigation/Routes";
import styles from './Navigation.module.scss'

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {routesArray.map(({ path, name }) => (
          <NavLinkWithActiveClass className={`${styles.navListItem} link`} key={path} to={path} exact>
            {name}
          </NavLinkWithActiveClass>
        ))}
      </ul>
    </nav>
  );
};
