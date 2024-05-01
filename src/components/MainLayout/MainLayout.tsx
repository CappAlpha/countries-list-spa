import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <main className={s.root}>
      <Outlet />
    </main>
  );
};
