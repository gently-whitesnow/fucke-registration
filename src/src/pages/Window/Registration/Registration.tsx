import { observer } from 'mobx-react-lite';
import { registrationStore } from '../../../stores/registrationStore';
import Step from '../../../components/Step/Step';

const Registration = () => {
  return (
    <div>
      {0 === registrationStore.step && (
        <Step
          title="Индикатор антропо-культурной групповой идентичности"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setRace(e.target.value);
          }}
          value={registrationStore.race}
          error={registrationStore.raceError}
        />
      )}
      {1 === registrationStore.step && (
        <Step
          title="Унифицированный маркер инициации в системе"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setLogin(e.target.value);
          }}
          value={registrationStore.login}
          error={registrationStore.loginError}
        />
      )}
      {2 === registrationStore.step && (
        <Step
          title="Субъектный узел электронной корреспонденции"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setEmail(e.target.value);
          }}
          value={registrationStore.email}
          error={registrationStore.emailError}
        />
      )}
      {3 === registrationStore.step && (
        <Step
          title="Аутентификационный код субъекта"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setPassword1(e.target.value);
          }}
          value={registrationStore.password1}
          error={registrationStore.passwordError}
        />
      )}
      {4 === registrationStore.step && (
        <Step
          title="Репликация аутентификационного кода"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setPassword2(e.target.value);
          }}
          value={registrationStore.password2}
          error={registrationStore.passwordError}
        />
      )}
      {5 === registrationStore.step && (
        <Step
          title="Рекурсивное подтверждение криптографического вектора"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setPassword3(e.target.value);
          }}
          value={registrationStore.password3}
          error={registrationStore.passwordError}
        />
      )}
      {6 === registrationStore.step && (
        <Step
          title="Уникальный идентификатор голосового канала связи"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            registrationStore.setPhone(e.target.value);
          }}
          value={registrationStore.phone}
          error={registrationStore.phoneError}
        />
      )}
    </div>
  );
};

export default observer(Registration);
