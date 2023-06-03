/* eslint-disable consistent-return */
import { useRouter } from 'next/router';
import useQuiosco from '../hooks/useQuiosco';

function Steps() {
  const router = useRouter();
  const { handleStepChange } = useQuiosco();
  const steps = [
    { paso: 1, nombre: 'Menú', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resume' },
    { paso: 3, nombre: 'Datos y Total', url: '/total' },

  ];
  const actualStepBar = () => {
    if (router.pathname === '/') {
      return 'w-1/6';
    }
    if (router.pathname === '/resume') {
      return 'w-2/4';
    }
    if (router.pathname === '/total') {
      return 'w-full';
    }
  };
  return (
    <>

      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            type="button"
            onClick={() => {
              router.push(step.url);
              handleStepChange(step.paso);
            }}
            className="text-2xl font-bold border border-l flex items-center hover:text-white hover:bg-indigo-600 rounded-md px-2 py-1"
            key={step.paso}
          >
            {step.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div className={` ${actualStepBar()} rounded-full  bg-amber-500 text-xs leading-none text-center text-amber-500`}>.</div>
      </div>
    </>
  );
}

export default Steps;
