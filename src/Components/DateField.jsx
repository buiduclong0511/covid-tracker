import styled from "styled-components";
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const DateField = ({
    label = "",
    value = null,
    maxDate = null,
    onChange = () => {}
}) => {
    return (
        <StyledDateField>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={label}
                    value={value}
                    onChange={onChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    autoOk
                    maxDate={maxDate ? maxDate : new Date(new Date().setDate(new Date().getDate() - 1))}
                    maxDateMessage="Ngày không hợp lệ"
                    fullWidth
                />
                </Grid>
            </MuiPickersUtilsProvider>
        </StyledDateField>
    );
};

const StyledDateField = styled.div`

`;