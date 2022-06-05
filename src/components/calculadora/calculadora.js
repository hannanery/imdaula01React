import React from "react";
import "./calculadora.css";

export default function Calculadora(props) {
  return (
    <div className="calculadora">
      <p>
        A soma de {props.a} + {props.b} é {props.a + props.b}
      </p>
      <p>
        A subtração de {props.a} - {props.b} é {props.a - props.b}
      </p>
      <p>
        A multiplicação de {props.a} * {props.b} é {props.a * props.b}
      </p>
      <p>
        A divisão de {props.a} / {props.b} é {props.a / props.b}
      </p>
    </div>
  );
}
