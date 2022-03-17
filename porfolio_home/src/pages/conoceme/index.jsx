import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.css';
import PanToolIcon from '@mui/icons-material/PanTool';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';




export default function Conocome(){

    return(

        <Stack sx={{ alignItems: 'center', bgcolor:'secondary.main'}}>

            <div className='conoceme-title'>CONOCEME</div>

            <div className='box1Conoceme'>

                    <Typography component="div">


                            <div className='paragraph1Conoceme'>
                                <PanToolIcon/>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'left', m: 1 }}>
                                    Left aligned fdsftext.
                                </Box>
                            </div>

                            <Box sx={{ textAlign: 'justify', m: 1 }}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box>


                                    <Divider/>


                            <div className='paragraph1Conoceme'>
                                <CheckCircleIcon/>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'left', m: 1 }}>
                                    Left aligned text.
                                </Box>
                            </div> 

                            <Box sx={{ textAlign: 'justify', m: 1 }}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box>


                                    <Divider/>


                            <div className='paragraph1Conoceme'>
                                <CardGiftcardIcon/>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'left', m: 1 }}>
                                        Left aligned text.
                                </Box>
                            </div>    

                            <Box sx={{ textAlign: 'justify', m: 1 }}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box>
                            

                                    <Divider/>


                            <div className='paragraph1Conoceme'>
                                <ComputerIcon/>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'left', m: 1 }}>
                                        Left aligned text.
                                </Box>
                            </div>    
                            <Box sx={{ textAlign: 'justify', m: 1 }}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box> 


                                    <Divider/>


                            <div className='paragraph1Conoceme'>
                                <LocalFireDepartmentIcon/>
                                <Box sx={{ fontWeight: 'bold', textAlign: 'left', m: 1 }}>
                                        Left aligned text.
                                </Box>
                            </div>    
                            <Box sx={{ textAlign: 'justify', m: 1 }}>
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                            </Box>                              


                    </Typography>

            </div>

        </Stack>
        
    )
}