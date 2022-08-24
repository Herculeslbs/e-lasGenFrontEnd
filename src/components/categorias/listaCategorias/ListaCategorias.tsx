import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material'
import './ListaCategorias.css';
import Categorias from '../../../models/Categorias';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaCategorias() {
  const [categorias,setCategorias]= useState<Categorias[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );
  let history = useNavigate();
  useEffect(()=>{
    if(token==''){
      toast.error('Você precisa estar logado',{
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
    history("/login")	
  }
  },[token])
  async function getCategorias(){
    await busca("/categorias",setCategorias,{
    headers:{
    'Authorization': token
    }
  })
  }
  useEffect(()=>{
    getCategorias()
  }, [categorias.length])
  return (
    <>
    { categorias.map(categorias=>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Categorias
            </Typography>
            
            <Typography variant="h5" component="h2">
              {categorias.classe}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioCategorias/${categorias.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarCategorias/${categorias.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
     ))
     }
    </>
  );
}


export default ListaCategorias;