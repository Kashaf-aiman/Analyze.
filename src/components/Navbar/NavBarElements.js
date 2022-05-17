import { 
    ToggleButtonGroup,
    styled, 
    InputBase,
    alpha,
    } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid lightgray',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.02),
    },
    marginRigth: '0px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0.1),
        width: '280px',
    },
    }));
    
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display:'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    }));
    
export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '26ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
    }));
    
    
export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        margin: theme.spacing(0.5),
        border: 0,
        
        "&.Mui-disabled": {
        border: 0
        },
        "&:not(:first-of-type)": {
        borderRadius: theme.shape.borderRadius
        },
        "&:first-of-type": {
        borderRadius: theme.shape.borderRadius
        }
    }
    }));

