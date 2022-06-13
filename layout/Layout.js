import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import SideBar from '../components/SideBar';
import useQuiosco from '../hooks/useQuiosco';
import ProductModal from '../components/ProductModal';
import Steps from '../components/Steps';

import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, pagina }) {
  const customStyles = {
    content: {
      width: 'fitContent',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'inline',
    },
  };
  const { modal } = useQuiosco();

  Modal.setAppElement('#__next');

  return (
    <>
      <Head>
        <title>
          Café -
          {' '}
          {pagina}
        </title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <SideBar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Steps />
            {children}
          </div>
          {modal && (
          <Modal isOpen={modal} styles={customStyles}>
            <ProductModal />
          </Modal>
          )}
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
