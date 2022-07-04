import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FirstPage } from 'Pages/FirstPage/FirstPage';
import { SecondPage } from 'Pages/SecondPage/SecondPage';
import { Pages } from 'Pages/Pages';
import { Modal } from 'Components/UI/Modals/Modal';

type Props = {};
export const RoutesLayout: FC<Props> = () => {
  return (
    <>
      <Routes>
        <Route path='/firstPage' element={<FirstPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
        <Route path='/' element={<Pages />} />
      </Routes>
      <Modal />
    </>
  );
};
