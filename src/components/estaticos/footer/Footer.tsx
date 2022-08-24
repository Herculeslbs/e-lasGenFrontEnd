import React from 'react';
import './Footer.css';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <Grid alignItems="center" className="containerFooter" item xs={12}>
                <Box className="containerRodapePrincipal">
                    <Box>

                      <Box >
                        <img
                            className="logoFooter"
                            src="https://i.imgur.com/SoWe6xn.png"
                            alt="logo da empresa elasGen"
                        />
                        <Typography className="textoFooter">
                            Siga-nos
                        </Typography>
                        </Box>

                        <Box className="imgFooter">
                        <a href="https://github.com/e-elasGen/e-lasGenFrontEnd" target="_blank">
                            <img
                                className="imgFooter1"
                                src="https://i.imgur.com/eKUM40q.png"
                            />
                            </a>
                            <img
                                className="imgFooter2"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            />

                            <img
                                className="imgFooter2"
                                src="https://i.imgur.com/TsFYaAs.png"
                            />
                        </Box>
                    </Box>

                    <Box className="boxBorder">
                        <Typography className="textoFooter1">
                            <Link to="/home" className="text-decorator-none">
                                Home
                            </Link>
                         </Typography> 

                         <Typography className="textoFooter1">
                            <Link to="/produtos" className="text-decorator-none">
                                Shop
                            </Link>
                            </Typography>
                            <Typography className="textoFooter1">
                            <Link to="/sobre" className="text-decorator-none">
                                About Us
                            </Link>
                            </Typography>

                            <Typography className="textoFooter1">
                            <Link to="/login" className="text-decorator-none">
                                Login
                            </Link>
                            </Typography>
                        
                    </Box>

                    <Box >
                    <iframe className = "mapFooter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.270439466396!2d-46.65996159999999!3d-23.5587287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59962c4bbe59%3A0x20607dec95af535f!2sAv.%20Paulista%2C%202073%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-940!5e0!3m2!1spt-BR!2sbr!4v1660837177147!5m2!1spt-BR!2sbr" loading="lazy"></iframe>

                    <Typography className = "mapFooterTxt">
                    Av. Paulista, 2073 - Bela Vista
                    </Typography>
                    <Typography className = "mapFooterTxt1">
                    São Paulo - SP | 01311-940 
                    </Typography>
                    
                    
                    
                    </Box>
                </Box>
                <Box className="ContainerRodapeEnd">
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="rodapeEndTexto"
                    >
                        Copyright © 2022 Todos direitos reservados a E-lasGen
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Footer;
