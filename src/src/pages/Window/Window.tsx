import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import './Window.css';
import { authorizationStore } from '../../stores/authorizationStore';
import { registrationStore } from '../../stores/registrationStore';
import Authorization from './Authorization/Authorization';
import Registration from './Registration/Registration';
import Win from './Win/Win';
import {
  AuthorizationResolveConstant,
  RegistrationResolveConstant,
} from '../../constants/constants';
import { observer } from 'mobx-react-lite';

const Window = () => {
  const emptyState = 'empty';
  const registrationState = 'registration';
  const authorizationState = 'authorization';
  const winState = 'win';
  const [form, setForm] = useState(emptyState);

  useEffect(() => {
    if (
      registrationStore.step === RegistrationResolveConstant ||
      authorizationStore.step === AuthorizationResolveConstant
    ) {
      setForm(winState);
    }
  }, [registrationStore.step, authorizationStore.step]);

  return (
    <div className="window">
      {form === emptyState && (
        <div className="btn-wrapper">
          <Button
            onClick={() => setForm(registrationState)}
            text="Инициализация субъекта системы на стадии вхождения"
          />
          <Button
            onClick={() => setForm(authorizationState)}
            text="Инициализация субъекта системы на этапе доступа"
          />
        </div>
      )}
      {form === registrationState && (
        <>
          <div className="step-wrapper">
            <Registration />
          </div>
          <div className="btn-wrapper">
            <Button
              onClick={() => {
                registrationStore.increment();
              }}
              text="Активизация этапа очередного взаимодействия"
            />
            <Button
              onClick={() => {
                setForm(emptyState);
                registrationStore.resetStep();
              }}
              text="Активизация этапа детерменирования последовательности"
            />
          </div>
        </>
      )}
      {form === authorizationState && (
        <>
          <div className="step-wrapper">
            <Authorization />
          </div>
          <div className="btn-wrapper">
            <Button
              onClick={() => {
                authorizationStore.increment();
              }}
              text="Активизация этапа очередного взаимодействия"
            />
            <Button
              onClick={() => {
                setForm(emptyState);
                authorizationStore.resetStep();
              }}
              text="Активизация этапа детерменирования последовательности"
            />
          </div>
        </>
      )}
      {(registrationStore.step === RegistrationResolveConstant ||
        authorizationStore.step === AuthorizationResolveConstant) && (
        <>
          <Win />
          <Button
            onClick={() => {
              setForm(emptyState);
              authorizationStore.resetStep();
              authorizationStore.resetStore();
              registrationStore.resetStep();
              registrationStore.resetStore();
            }}
            text="Активизация этапа детерменирования последовательности"
          />
        </>
      )}
    </div>
  );
};

export default observer(Window);
