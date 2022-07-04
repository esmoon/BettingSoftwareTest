import { FC } from 'react';
import { useNavigate } from 'react-router';

type Props = {};
export const SignInModalLayout: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className='modal__wrapper'>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className='modal__inner'
      >
        Другое модальное окно
      </div>
    </div>
  );
};
