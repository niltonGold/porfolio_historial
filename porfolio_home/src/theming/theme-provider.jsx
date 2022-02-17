
import {  ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { myTheme, myDarkTheme } from '../theming/theme.js'
import { ThemeContext } from '../theming/theme-context.js';
import * as React from 'react';



export default function ThemeProvider({children}){
    const [isDark, changeTheme] = React.useState(false);

    return(
        <ThemeContext.Provider value={[isDark, changeTheme]}> 
            <MuiThemeProvider theme={isDark ? myDarkTheme : myTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}