import { FC, useState } from 'react';
import { GET_ENUMS } from 'const/modalRouter';
import useModalState from 'hooks/useModalState';
import { SignUpModalLayout } from './SignUp/SignUpModalLayout';
import { SignInModalLayout } from './SignIn/SignInModalLayout';

type Props = {};

const popups = {
  [GET_ENUMS.popup.signUp]: SignUpModalLayout,
  [GET_ENUMS.popup.signIn]: SignInModalLayout,
};

export const Modal: FC<Props> = () => {
  const [checkBoxValue, setCheckBoxValue] = useState('');
  const { mountedPopup, isOpened } = useModalState();

  // @ts-ignore
  const Component = popups[mountedPopup];
  if (!Component) {
    return null;
  }

  return (
    <Component
      checkBoxValue={checkBoxValue}
      setCheckBoxValue={setCheckBoxValue}
      isOpened={isOpened}
    />
  );
};
