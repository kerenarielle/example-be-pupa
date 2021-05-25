import React, { useCallback } from 'react';

const ContainerList = ({ title, description, open, change }) => {
  const handleClick = useCallback(() => {
    change(false);
  }, [change]);

  return (
    <div className={`modal ${open ? 'show' : 'hide'}`}>
      <div className="container">
    
        <span className="close" onClick={handleClick}>X</span>
        <h2>{title}</h2>
    
        <p>{description}</p>
    
        <button type="button" className="button_close" onClick={handleClick}>Fechar</button>
      </div>
    </div>
  );
};

export default ContainerList;