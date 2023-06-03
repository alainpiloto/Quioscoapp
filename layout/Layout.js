import Head from 'next/head';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
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
  const router = useRouter();
  const actualPage = () => {
    if (router.pathname === '/') {
      return 'menu';
    }
    if (router.pathname === '/resume') {
      return 'resume';
    }
    if (router.pathname === '/total') {
      return 'total';
    }
    return 'menu';
  };

  Modal.setAppElement('#__next');

  return (
    <>
      <Head>
        <title>
          Café -

          {pagina}
        </title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="md:flex overflow-y-hidden h-screen">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-y-scroll">
          <SideBar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-auto">
          <div className="p-10">
            <Steps />
            {children}
          </div>
          {modal && (
          <Modal isOpen={modal} style={customStyles}>
            <ProductModal />
          </Modal>
          )}
        </main>
      </div>

      {actualPage() === 'menu'
        ? (
          <button type="button" onClick={() => router.push('/resume')} className="fixed bg-opacity-80 hover:bg-opacity-100 border-2 flex items-center gap-2 bottom-10 bg-indigo-600 text-white px-6 py-4 rounded-md right-10">
            <AiOutlineShoppingCart size="1.5rem" />
            <p> Ver Resumen</p>
          </button>
        )
        : (
          <button type="button" onClick={() => router.push('/')} className="fixed flex bg-opacity-80 hover:bg-opacity-100 items-center gap-2 bottom-10 bg-indigo-600 text-white px-6 py-4 rounded-md right-10">
            <AiOutlineShop size="1.5rem" />
            <p> Volver al Menú </p>
          </button>
        )}

      <ToastContainer />
    </>
  );
}
