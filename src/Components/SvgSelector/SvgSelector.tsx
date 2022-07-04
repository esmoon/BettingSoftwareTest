import { FC } from 'react';
import { Close } from './Components/Close';

type Props = {
  name: string;
  className?: string;
};

export const SvgSelector: FC<Props> = ({ name, className }) => {
  switch (name) {
    case 'close':
      return <Close className={className} />;
    default:
      return <svg></svg>;
  }
};
