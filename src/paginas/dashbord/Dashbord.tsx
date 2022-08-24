import { Box } from "@mui/material";
import React from "react";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import ModalCategorias from "./../../components/categorias/modalCategorias/ModalCategorias";
import { Grid } from "@material-ui/core";
import './dashbord.css'
import ListaCategorias from './../../components/categorias/listaCategorias/ListaCategorias';

function Dashbord() {
  return (
    <>
      <Grid className="containerDashbord">
        <Box className="boxModalDashbord">
          <ModalProduto />
        </Box>
        <Box className="boxModalDashbord">
          <ModalCategorias/>
        </Box>
        <Box className="boxModalDashbord">
          <ListaCategorias/>
        </Box>

      </Grid>
    </>
  );
}

export default Dashbord;
