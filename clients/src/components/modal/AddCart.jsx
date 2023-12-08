import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const AddCart = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <p className="mb-4">Producto añadido a la bolsa.</p>
        <div className='flex justify-around items-center w-full '>
        <Button className="px-4 py-2 mr-1 ml-1 bg-Dangers text-white rounded-md">
          <Link href='/' prefetch>
            Seguir Comprando
          </Link>
        </Button>
        <Button className="px-4 py-2 bg-blue-500 mr-1 ml-1 text-white rounded-md">
          <Link href='/DetailPurchased' prefetch>
            Ver Bolsa
          </Link>
        </Button>
        <Button className="px-4 py-2 bg-gray-500 mr-1 ml-1 text-white rounded-md" onClick={onClose}>
          Cerrar
        </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
