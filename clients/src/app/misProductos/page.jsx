"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProducts } from "@/util/http";
import Footers from '../../components/footer/Footers'
import { Pagination } from "@nextui-org/react";

export default function MiProducts() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.storeShopping.historyProduct);
  const [currentPage, setCurrentPage] = useState(1);

  const data = product.map((map) =>
    map.Carritos.map((car) => ({
      tipo: car.tipo,
      nombre: car.nombre,
      categoria: car.categoria,
      precio: car.precio,
      data: car.createdAt,
    }))
  );

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlerPaguinado = (page) => {
    setCurrentPage(page);
  };

   //* Conjo el id del localstore
   const userId = JSON.parse(localStorage.getItem("token")).id;
  useEffect(() => {
    dispatch(myProducts(userId));
  }, [dispatch, userId]);

  const totalPages = Math.ceil(data.flat().length / itemsPerPage);

  return (
    <>
    <div className="text-center sm:m-10 md:m-20 lg:m-28 border rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">Tus Compras</h1>
      <table className="min-w-full border rounded-lg p-4">
        <thead>
          <tr>
            <th className="border bg-gray-200 p-2">Nombre</th>
            <th className="border bg-gray-200 p-2">Categoria</th>
            <th className="border bg-gray-200 p-2">Tipo</th>
            <th className="border bg-gray-200 p-2">Precio</th>
            <th className="border bg-gray-200 p-2">Data</th>
          </tr>
        </thead>
        <tbody>
          {data.flat().slice(startIndex, endIndex).map((carrito, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="p-2">{carrito.nombre}</td>
              <td className="p-2">{carrito.categoria}</td>
              <td className="p-2">{carrito.tipo}</td>
              <td className="p-2">{carrito.precio}</td>
              <td className="p-2">{new Date(carrito.data).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-3"> 
        <Pagination showShadow color="danger" total={totalPages} initialPage={1} onChange={handlerPaguinado} />
      </div>
    </div>
    <Footers />
  </>
  
  );
}
