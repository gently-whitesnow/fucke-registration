import { observer } from 'mobx-react-lite';
import { authorizationStore } from '../../../stores/authorizationStore';
import { registrationStore } from '../../../stores/registrationStore';
import './Win.css';

const Win = () => {
  return (
    <>
      <h1 className="rainbow">
        {authorizationStore.login || registrationStore.login}
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pYcR1p_jCmE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default observer(Win);
