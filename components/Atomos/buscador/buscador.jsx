import { FiSearch } from 'react-icons/fi';
import styles from './buscador.module.css';

const Buscador = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="¿Qué estás buscando hoy?"
        className={styles.searchInput}
      />
      <FiSearch className={styles.searchIcon} />
    </div>
  );
};

export default Buscador;