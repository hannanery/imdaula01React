import React from "react";
import "./contato.css";

export default function Contato(props) {
  return (
    <div className="contato">
      <p>Nome: {props.nome}</p>
      <p>Sobrenome: {props.sobrenome}</p>
      <p>Contato: {props.contato}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}
