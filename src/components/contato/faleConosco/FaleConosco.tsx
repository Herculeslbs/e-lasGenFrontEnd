import { Button, TextField, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import "./FaleConosco.css";
function Alert(e: any) {
  e.preventDefault()
toast.success('E-mail cadastrado com sucesso',{
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "colored",
  progress: undefined,
});
}
function FaleConosco() {
  return (
    <>
      <Box className="containerFaleConosco">
        <Grid xs={6} alignItems="center">
        <Box className="containerFaleConoscoTxt">
        <Typography className="faleConoscoTitulo">NEWSLETTER</Typography>
        </Box>
        <Box className="containerFaleConoscoTxt">
          <Typography className="faleConoscoTxt">Cadastre seu e-mail e fique por dentro das novidades.</Typography>
        </Box>
        </Grid>

        <Grid xs={6} alignItems='center'>
        <Box className="inputs">
          <form>
          <TextField
            id="nome"
            label="Seu nome"
            variant="outlined"
            name="email"
            margin="normal"
            fullWidth
            className="container-input"
          />
          <TextField
            id="email"
            label="Seu e-mail"
            variant="outlined"
            name="email"
            margin="normal"
            fullWidth
            className="container-input"
          />
          
          <Box className="btnInput">
          <Button onClick={Alert} type="submit" className="custom-btn btn">
            Cadastrar
          </Button>
          </Box>
          </form>
        </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FaleConosco;
