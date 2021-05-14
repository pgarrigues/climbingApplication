import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect({selectedSeason, handleChangeSeason}) {
  const classes = useStyles();  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Saison
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={selectedSeason}
          onChange={handleChangeSeason}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Printemps'}>Printemps</MenuItem>
          <MenuItem value={'Été'}>Été</MenuItem>
          <MenuItem value={'Automne'}>Automne</MenuItem>
          <MenuItem value={'Hiver'}>Hiver</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
