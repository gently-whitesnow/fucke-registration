import { observer } from 'mobx-react-lite';
import { authorizationStore } from '../../../stores/authorizationStore';
import Step from '../../../components/Step/Step';

const Authorization = () => {
  return (
    <div>
      {0 === authorizationStore.step && (
        <Step
          title="Аутентификационный код субъекта"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            authorizationStore.setPassword(e.target.value);
          }}
          value={authorizationStore.password}
          error={authorizationStore.authorizationError}
        />
      )}
      {1 === authorizationStore.step && (
        <Step
          title="Унифицированный маркер инициации в системе"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            authorizationStore.setLogin(e.target.value);
          }}
          value={authorizationStore.login}
          error={authorizationStore.authorizationError}
        />
      )}
    </div>
  );
};

export default observer(Authorization);
