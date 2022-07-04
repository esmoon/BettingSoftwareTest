import { ChangeEvent, FC } from 'react';
import block from 'bem-cn';

type InputPropsType = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
};
const customInput = block('customInput');
export const Input: FC<InputPropsType> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <input
      className={customInput()}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
