import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    }
});