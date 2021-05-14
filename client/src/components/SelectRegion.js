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

export default function SimpleSelect({selectedRegion, handleChangeRegion}) {
  const classes = useStyles();  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Région
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={selectedRegion}
          onChange={handleChangeRegion}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Alsace'}>Alsace</MenuItem>
          <MenuItem value={'Aquitaine'}>Aquitaine</MenuItem>
          <MenuItem value={'Bourgogne'}>Bourgogne</MenuItem>
          <MenuItem value={'Bretagne'}>Bretagne</MenuItem>
          <MenuItem value={'Corse'}>Corse</MenuItem>
          <MenuItem value={'Franche Comté'}>Franche Comté</MenuItem>
          <MenuItem value={'Haute Normandie'}>Haute Normandie</MenuItem>
          <MenuItem value={'Ile de France'}>Ile de France</MenuItem>
          <MenuItem value={'Languedoc Roussillon'}>Languedoc Roussillon</MenuItem>
          <MenuItem value={'Midi Pyrénées'}>Midi Pyrénées</MenuItem>
          <MenuItem value={'Normandie'}>Normandie</MenuItem>
          <MenuItem value={`Provence Alpes Cote d'Azur`}>Provence Alpes Cote d'Azur</MenuItem>
          <MenuItem value={'Rhone Alpes'}>Rhone Alpes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
