import axios from 'axios';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import s from './HomePage.module.scss';
import { ALL_COUNTRIES_LIST } from '../../shared/constants/api';
import { CardItem } from '../../components/CardItem';
import type { Country } from '../../entities/country';
import { Button } from 'react-bootstrap';

export const HomePage: FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const isCountries = Boolean(countries.length);

  useEffect(() => {
    if (!isCountries) {
      axios
        .get<Country[]>(ALL_COUNTRIES_LIST)
        .then(({ data }) => setCountries(data))
        .catch(() => setError(true));
    }
  }, [isCountries]);

  const countriesFilter = showMore ? countries : countries.slice(0, 10);

  return (
    <div className={s.root}>
      <h1 className={s.title}>Home page</h1>
      <div className={s.wrap}>
        {isCountries &&
          countriesFilter.map((country) => (
            <CardItem key={country.name.common} country={country} />
          ))}
        {error && <h2 className={s.title}>Error cant get countries!</h2>}
      </div>
      {isCountries && (
        <Button onClick={() => setShowMore((prev) => !prev)}>Show more</Button>
      )}
    </div>
  );
};
