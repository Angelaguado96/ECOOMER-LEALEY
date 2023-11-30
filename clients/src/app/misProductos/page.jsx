"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { users } from "./data";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myProducts } from "@/util/http";

export default function miProducts() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.storeShopping.historyProduct);
 
  console.log(product);

  //* conjo el id del localstore
  const userId = JSON.parse(localStorage.getItem("token")).id;

  useEffect(() => {
    dispatch(myProducts(userId));
  }, []);

  const rows = product.map((product) => ({
    key: product.id,
    nombre: product.nombre,
    categoria: product.categoria,
    precio: product.precio,
    tipo: product.tipo,
  }));
  


  const columns = [
    {
      key: "nombre",
      label: "NOMBRE",
    },
    {
      key: "categoria",
      label: "CATEGORIA",
    },
    {
      key: "precio",
      label: "PRECIO",
    },
    {
      key: "tipo",
      label: "Tipo",
    },
  ];

  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <TableRow key={item.key}>
          {(columnKey) => (
            <TableCell>{item[columnKey]}</TableCell>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
