import { FC } from 'react';
import block from 'bem-cn';
import { useNavigate } from 'react-router';
import { GET_ENUMS, GET_PARAMS } from '../../const/modalRouter';

type Props = {};
const firstPage = block('firstPage');
export const FirstPageLayout: FC<Props> = () => {
  const navigate = useNavigate();
  const query = GET_PARAMS.popup;
  const queryPopup = GET_ENUMS.popup.signUp;
  return (
    <div className={firstPage('wrapper')}>
      <div className={firstPage('inner')}>
        <button
          onClick={() => navigate('/firstPage')}
          type='button'
          className={firstPage('btn')}
        >
          First Page
        </button>
        <button
          onClick={() => navigate(`?${query}=${queryPopup}`)}
          type='button'
          style={{
            background: 'green',
            width: '100%',
            borderRadius: '10px',
            color: 'white',
            marginTop: '10px',
            cursor: 'pointer',
            height: '45px',
          }}
        >
          Открыть модальное окно
        </button>
      </div>
    </div>
  );
};
