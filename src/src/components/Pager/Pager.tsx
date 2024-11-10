import React from 'react';
import Button from '../Button/Button';
import './Pager.css';

const Pager = () => {
  return (
    <div className="pager">
      <Button
        onClick={() => console.log('prev')}
        text="Активизация очередного этапа взаимодействия"
      />
    </div>
  );
};

export default Pager;
