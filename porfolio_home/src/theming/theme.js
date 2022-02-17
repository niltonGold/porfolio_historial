import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import oswald from '../fonts/Oswald-Bold.ttf'
import { orange } from '@mui/material/colors';

export const myTheme = createTheme ({
    typography:{
        fontFamily: oswald,
       
    },
    palette:{
        primary:{
            main:amber[600],
            dark:'#c79400'
        },
        secondary:{
            main:orange[200],
            dark:'#ca9b52'
        },
    }
});


export const myDarkTheme = createTheme ({
    typography:{
        fontFamily: oswald,
           
    },

    palette:{
        primary:{
            main:blue[500],
            // dark:'#0069c0'
            dark:'#000000'
        },
        secondary:{
            main:indigo[700],
            dark:'#001064',
        },
    },
});

