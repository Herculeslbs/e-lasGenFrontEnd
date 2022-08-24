import React from 'react';
import './Sobre.css';
import { Box } from '@mui/material';
import { Avatar, Card, Typography } from '@material-ui/core';

function sobre() {
    return (
        <>
            <Box className="ContainerBoxTitulo">
                <img src="https://static.tumblr.com/1de322660ae41439b38aeecebcdb2ab5/vgwyylt/DF2o841el/tumblr_static_7ypwyem2adwcgc4s8c048gccc.gif" className= "img10" />
            </Box>
            <Box className="Container">
                <Box className="ContainerBoxSubtitulo">
                    <Typography className="BoxSubtitulo">Sobre nós</Typography>
                </Box>

                <Box className="ContainerBoxDescricao">
                    <Typography className="BoxDescricao">
                        E-lasgen é um e-commerce que nasceu após observarmos o
                        panorama do mercado de trabalho e concluirmos que a
                        disparidade salarial de gêneros ainda é uma realidade em
                        nosso país. Pensando nisso, criamos um projeto no qual a
                        tecnologia da informação está a serviço do empoderamento
                        feminino. Sendo assim, almejamos que esse seja um espaço
                        acolhedor onde mulheres apoiam e incentivam umas às
                        outras a alcaçarem seus objetivos profissionais,
                        conquistando independência financeira e visibilidade de
                        seus produtos. Acreditamos que a tecnologia é uma
                        ferramenta capaz de gerar vínculos que vão além dos
                        profissionais,quebrando barreiras geográficas,
                        conectando histórias e ajudando pessoas a realizarem
                        seus sonhos. "É pelo trabalho que a mulher vem
                        diminuindo a distância que a separava do homem, somente
                        o trabalho poderá garantir-lhe uma independência
                        concreta." - Simone de Beauvoir.
                    </Typography>
                </Box>
            </Box>
            <Box className="Container">
                <Box className="ContainerBoxSubtitulo">
                    <Typography className="BoxSubtitulo">
                        Tecnologias
                    </Typography>
                </Box>

                <Box className="ContainerBoxImg">
                    <Box className="imgSobre">
                        <img
                            height="75"
                            width="90"
                            title="Java"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Spring Boot"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="MySQL"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="HTML"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="CSS"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Javascript"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Typescript"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="React"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Material-UI"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Redux"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                        />
                    </Box>
                    <Box className="imgSobre">
                        <img
                            height="60"
                            width="70"
                            title="Trello"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                        />
                    </Box>
                </Box>
            </Box>
            <Box className="containerBackCard">
                <Typography className="tituloCard">
                    Equipe de Desenvolvimento
                </Typography>
                <Box className="containerCard">
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/85812823?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">Dário Reis</Typography>
                        <Box>
                            <a href= "https://github.com/darioreisjr" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/darioreisjr/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://i.imgur.com/ngJEsNI.jpeg"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Felipe Camilo
                        </Typography>
                        <Box>
                        <a href= "https://github.com/Felipe1801" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/felipe-camilo-699b60239/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/102184093?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Hercules Lima
                        </Typography>
                        <Box>
                        <a href= "https://github.com/Herculeslbs" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/herculeslbs/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/105321172?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Leonardo Rampazi
                        </Typography>
                        <Box>
                        <a href= "https://github.com/Leonardo-Rampazi" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/leonardo-rampazi-159838230/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                </Box>
                <Box className="containerCard">
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/106315497?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Manoela Melo
                        </Typography>
                        <Box>
                        <a href= "https://github.com/0manoela" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/manoela-melo-29b553238" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://i.imgur.com/oAa6Cvr.jpeg"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Rebeca Azevedo
                        </Typography>
                        <Box>
                        <a href= "https://github.com/rebecaaaa" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/rebeca-azevedo-0165b8150/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/106209900?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Vanessa Bassilio
                        </Typography>
                        <Box>
                        <a href= "https://github.com/VanessaB063013" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/vanessa-basilio-/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                    <Card className="cardDev">
                        <Avatar
                            src="https://avatars.githubusercontent.com/u/106260071?v=4"
                            className="avatarCard"
                        />
                        <Typography className="TxtCard">
                            Vinicius Silvestre
                        </Typography>
                        <Box>
                        <a href= "https://github.com/ViniSilvestre" target= "_blank">
                            <img
                                src="https://i.imgur.com/hGksNgM.png"
                                className="imgDev1"
                            />
                            </a>
                            <a href= "https://www.linkedin.com/in/vinisilvestre/" target= "_blank">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                                className="imgDev"
                            />
                            </a>
                        </Box>
                    </Card>
                </Box>
            </Box>
            
            <Box className="Container">
                <Typography className="BoxSubtitulo1">
                    Agradecimentos a May Balbino
                </Typography>

                <Box className="Boxavatar">
                    <Avatar
                        src="https://i.imgur.com/fY2rU11.jpg"
                        className="avatarMay"
                    />
                    <Typography className="TxtMay">
                        Empreendedora que trouxe de suas raízes a arte e a
                        costura. Graduada em moda, May acessibiliza a arte por
                        meio de suas costumizações em roupas, entre outros
                        trabalhos que realiza. Gostaríamos de agradecer por
                        aceitar, de prontidão, disponibilizar suas peças e
                        valores para o nosso projeto.
                    </Typography>
                </Box>
                <Typography className="TxtMay1">
                    <a
                        className="TxtMay1"
                        href="https://www.instagram.com/maybalbino.ink/"
                        target="_blank"
                    >
                        @maybalbino.ink
                    </a>
                </Typography>
            </Box>
        </>
    );
}
export default sobre;
