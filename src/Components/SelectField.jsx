import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const SelectField = ({
    options = [],
    selectedValue = null,
    label = "",
    onChange = () => {}
}) => {
    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.Country}
            fullWidth
            onChange={onChange}
            value={selectedValue}
            renderInput={(params) => <TextField {...params} label={label} margin="normal" variant="standard" />}
        />
    );
};