import type { FC } from 'react';

import s from './CardItem.module.scss';
import { Card } from 'react-bootstrap';
import type { Country } from '../../entities/country';
import { useNavigate } from 'react-router-dom';

export interface Props {
  country: Country;
}

export const CardItem: FC<Props> = ({ country: { name, capital, flags } }) => {
  const navigate = useNavigate();

  const navigateTo = () => navigate(`/country/${name.common}`);

  return (
    <Card className={s.root} onClick={() => navigateTo()}>
      <Card.Img variant="top" src={flags.png} alt={flags.alt} />
      <Card.Body>
        <Card.Title>
          Common: <span className={s.subtitle}>{name.common}</span>
        </Card.Title>
        <Card.Title>
          Official: <span className={s.subtitle}>{name.official}</span>
        </Card.Title>
        <Card.Title>
          Capital: <span className={s.subtitle}>{capital}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
