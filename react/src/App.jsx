import React, { useCallback, useState } from 'react';

/**
 * Components dependencies
 */
import ContainerList from './components/ContainerList/containerList';
import Modal from './components/Modal/modal';

/**
 * Utils dependencie
 */
import CatalogMap from './utils/catalogMap';

/**
 * Styles
 */
import './styles/index.scss';

const App = () => {
  const [ movie, setMovie] = useState('');
  const [ openModal, setModal] = useState(false);

  const handleChangePis = useCallback((value) => {
    setModal(true);
    setMovie(value);
  }, []);

  const handleModal = useCallback((value) => {
    setModal(value);
  }, []);

  return (
    <>
      <section>
        <h1>Catálogo</h1>
        <ContainerList catalog={CatalogMap} change={handleChangePis} />
      </section>
      <Modal 
        title={movie.title} 
        description={movie.description} 
        change={handleModal} 
        open={openModal}
      />
    </>
  );
}

export default App;
