import React, { useCallback } from 'react';

const ContainerList = ({ catalog, change }) => {
  const handleModal = useCallback(
    (description, title) => change({ description, title }),
    [change],
  );

  return (
    <ul className="container-list">
      { catalog.map(({ link, title, description}, index) => (
        <li key={index}>
         <img src={link} alt={description} onClick={() => handleModal(description, title)} />
       </li>
      ))}
    </ul>
  );
};

export default ContainerList;