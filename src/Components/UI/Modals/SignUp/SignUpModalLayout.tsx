import { Dispatch, FC, SetStateAction } from 'react';
import block from 'bem-cn';
import Select from 'react-select';
import { SvgSelector } from 'Components/SvgSelector/SvgSelector';
import { Input } from 'Components/UI/Input/Input';
import { useNavigate } from 'react-router-dom';
import { GET_ENUMS, GET_PARAMS } from 'const/modalRouter';
import {
  selectDateOptions,
  selectMonthOptions,
  selectYearOptions,
} from '../data';

type Props = {
  checkBoxValue: string;
  setCheckBoxValue: Dispatch<SetStateAction<string>>;
};

const modal = block('modal');
const selectContainer = block('selectContainer');
const select = block('select');
const checkBoxContainer = block('checkBoxContainer');

export const SignUpModalLayout: FC<Props> = ({
  checkBoxValue,
  setCheckBoxValue,
}) => {
  const navigate = useNavigate();
  const query = GET_PARAMS.popup;
  const queryPopUp = GET_ENUMS.popup.signIn;
  return (
    <>
      <div onClick={() => navigate(-1)} className={modal('wrapper')}>
        <div onClick={(e) => e.stopPropagation()} className={modal('inner')}>
          <div className={modal('container')}>
            <div className={modal('header')}>
              <div className={modal('header').mix('info')}>
                <p className={modal('header').mix('title')}>Регистрация</p>
                <p className={modal('header').mix('description')}>
                  Быстро и легко.
                </p>
              </div>
              <div onClick={() => navigate(-1)}>
                <SvgSelector
                  className={modal('header').mix('closeIcon')}
                  name='close'
                />
              </div>
            </div>
            <div className={modal('content')}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Input type='text' placeholder='Имя' />
                <Input type='text' placeholder='Фамилия' />
              </div>
              <Input
                type='text'
                placeholder='Номер мобильного телефона или эл.адрес'
              />
              <Input type='password' placeholder='Новый пароль' />
              <Input type='password' placeholder='Повторите пароль' />
              <p className={modal('dateBirthday').mix('title')}>
                Дата рождения
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <Select
                  placeholder='1'
                  className={selectContainer()}
                  classNamePrefix={select()}
                  options={selectDateOptions}
                />

                <Select
                  placeholder='январь'
                  className={selectContainer()}
                  classNamePrefix={select()}
                  options={selectMonthOptions}
                />

                <Select
                  placeholder='2022'
                  className={selectContainer()}
                  classNamePrefix={select()}
                  options={selectYearOptions}
                />
              </div>
              <p className={checkBoxContainer('title')}>Пол</p>
              <div className={checkBoxContainer()}>
                <button
                  className={checkBoxContainer('button')}
                  type='button'
                  onClick={() => setCheckBoxValue('man')}
                >
                  <label>
                    <p className={checkBoxContainer('text')}>Женщина</p>
                    <input
                      name='man'
                      checked={checkBoxValue === 'man'}
                      onChange={(e) => setCheckBoxValue(e.target.name)}
                      type='checkbox'
                    />
                    <div className='check'></div>
                  </label>
                </button>
                <button
                  className={checkBoxContainer('button')}
                  type='button'
                  onClick={() => setCheckBoxValue('woman')}
                >
                  <label>
                    <p className={checkBoxContainer('text')}>Мужчина</p>
                    <input
                      name='woman'
                      checked={checkBoxValue === 'woman'}
                      onChange={(e) => setCheckBoxValue(e.target.name)}
                      type='checkbox'
                    />
                    <div className='check'></div>
                  </label>
                </button>
                <button
                  className={checkBoxContainer('button')}
                  type='button'
                  onClick={() => setCheckBoxValue('another')}
                >
                  <label>
                    <p className={checkBoxContainer('text')}>Другое</p>
                    <input
                      name='another'
                      checked={checkBoxValue === 'another'}
                      onChange={(e) => setCheckBoxValue(e.target.name)}
                      type='checkbox'
                    />
                    <div className='check'></div>
                  </label>
                </button>
              </div>
              <p style={{ marginBottom: '5px' }} className={modal('info')}>
                Люди, которые пользуются нашим сервисом, могли загрузить вашу
                контактную информацию на Facebook. Подробнее
              </p>
              <p className={modal('info')}>
                Нажимая кнопку "Регистрация", вы принимаете Условия. Прочитайте
                Политику использования данных, чтобы узнать, как мы получаем,
                используем и передаем ваши данные, а также просмотрите Политику
                в отношении файлов cookie, чтобы узнать, как мы используем файлы
                cookie и подобные технологии. Вы можете получать от нас
                SMS-уведомления, отказаться от которых можно в любой момент.
              </p>
              <button
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  color: 'white',
                  height: '45px',
                  background: 'green',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => navigate(`?${query}=${queryPopUp}`)}
                type='button'
              >
                Другое модальное окно
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};
