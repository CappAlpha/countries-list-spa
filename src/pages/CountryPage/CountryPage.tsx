import type { FC } from 'react';
import { useEffect, useState } from 'react';

import s from './CountryPage.module.scss';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { API_HOST } from '../../shared/constants/api';
import type { Country } from '../../entities/country';
import { CardItem } from '../../components/CardItem';
import { Button } from 'react-bootstrap';

export const CountryPage: FC = () => {
  const { name } = useParams();
  const [error, setError] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);

  const searchByCountry = (name: string | undefined) =>
    API_HOST + 'name/' + name;

  useEffect(() => {
    axios
      .get<Country[]>(searchByCountry(name))
      .then(({ data }) => setCountry(data[0]))
      .catch(() => {
        setError(true);
      });
  }, [name]);

  return (
    <div className={s.root}>
      {error ? (
        <h2 className={s.title}>Error cant get country!</h2>
      ) : (
        <>
          <Link to="/">
            <Button className={s.link}>Back</Button>
          </Link>
          {country && <CardItem country={country} />}
        </>
      )}
    </div>
  );
};
