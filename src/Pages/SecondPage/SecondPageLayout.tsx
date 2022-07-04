import { FC } from 'react';
import block from 'bem-cn';
import { useNavigate } from 'react-router';

type Props = {};
const secondPage = block('secondPage');
export const SecondPageLayout: FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <div className={secondPage('wrapper')}>
      <div className={secondPage('inner')}>
        <button
          onClick={() => navigate('/secondPage')}
          type='button'
          className={secondPage('btn')}
        >
          Second Page
        </button>
      </div>
    </div>
  );
};
