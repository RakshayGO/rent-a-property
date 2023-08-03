import { Autocomplete } from '@mui/material';
import { styled } from "@mui/material/styles";

export const StyledAutocomplete = styled(Autocomplete)({
    "& .MuiAutocomplete-inputRoot": {
        color: "#5A5A5A",
        fontWeight: 500,
        height: 45,
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
            paddingLeft: 10,
            paddingTop: 3
        },
    }
});