import React from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const Comentarios = props => {
  if (props.cargando) {
    return <Spinner />;
  }
  if (props.error) {
    return <Fatal mensaje={props.error} />;
  }
  const ponerComentarios = () =>
    props.comentarios.map(comentario => (
      <li>
        <b>
          <u>{comentario.email}</u>
        </b>
        <br />
        {comentario.body}
      </li>
    ));

  return <ul>{ponerComentarios()}</ul>;
};

const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);
