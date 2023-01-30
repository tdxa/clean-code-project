import * as styles from '../search.module.scss';
import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  noResults?: boolean;
}
const SearchInformation: FC<Props> = ({ noResults }) => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageIcon}>
        {!noResults && <SearchIcon fontSize='large' />}
      </div>
      <h1 className={styles.messageLabel}>Brak wyników wyszukiwania</h1>
      <div className={styles.messageText}>
        Nie znaleziono przepisów spełniających wybrane kryteria
      </div>
    </div>
  );
};

export default SearchInformation;
