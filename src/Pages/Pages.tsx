import { FC } from 'react';
import block from 'bem-cn';
import { FirstPage } from './FirstPage/FirstPage';
import { SecondPage } from './SecondPage/SecondPage';

type Props = {};
const page = block('page');
export const Pages: FC<Props> = () => {
  return (
    <div className={page('wrapper')}>
      <div className={page('inner')}>
        <FirstPage />
        <SecondPage />
      </div>
    </div>
  );
};
