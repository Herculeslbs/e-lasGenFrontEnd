import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography, Grid, CardActionArea } from '@material-ui/core';
//import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produtos from '../../../models/Produtos';
import { toast } from 'react-toastify';
import './ListaProduto.css'
import CardProduto from '../../card/cardProdutos/CardProdutos';



function ListaProduto() {

/* Um React Hook que permite que você tenha um estado em um componente funcional. */
  const [Produtos, setProdutos] = useState<Produtos[]>([])
  //const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  /* Verificando se o token está vazio e se estiver, alertará o usuário que ele precisa estar logado
  e, em seguida, navegue até a página de login. */
  // useEffect(() => {
  //   if (token === "") {
  //     toast.error('Você precisa estar logado',{
  //       position: "top-right",
  //       autoClose: 4000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: false,
  //       theme: "colored",
  //       progress: undefined,
  //   });
  //     navigate("/login")
  //   }
  // }, [token])

  
/**
   * GetPost() é uma função assíncrona que chama busca() com os parâmetros "/postagens", setPosts e
   * um objeto com uma propriedade de cabeçalho que possui uma chave de 'Autorização' e um valor de token.
   */
  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

/* Chamando a função `getPost()` toda vez que o `posts.length` muda. */
  useEffect(() => {
    getProdutos()
  }, [Produtos.length])

 
  
  return (
    <>
     <Box className="ContainerLista">
     {Produtos.map(produtos => (
      <>
        <Box className="cardLista">
        <CardActionArea>
        <Box className="BoxImgLista">< img src={produtos.imagem}  /> </Box>
        <Box className="card-info-lista">
          <Typography className="textLista"> {produtos.nome}</Typography>
          <p className="textBody">{produtos.descricao}</p>
        </Box>
      
          
          </CardActionArea>

          <Box className="card-footer">
            <span className="text-title">R$ {produtos.preco}</span>
          <CardActions>
                <Box display="flex" justifyContent="center" >

                  <Link to={`/formularioProduto/${produtos.id}`}  >
                    <Box  >
                      <img src="https://i.imgur.com/UPyw05C.png" title="Atualizar" className="Atualizar" />
                    </Box>
                  </Link>
                  <Link to={`/deletarprodutos/${produtos.id}`} >
                    <Box  >
                     <img src="https://i.imgur.com/u3ztgBT.png" title="Deletar" className="Delete" />
                    </Box>
                  </Link>
                </Box>
              </CardActions>
          </Box>
        </Box>
        
        </>
        ))} 
    </Box>
    </>
  );
}


export default ListaProduto;