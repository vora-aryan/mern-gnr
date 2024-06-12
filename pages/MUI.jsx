import { Button, ButtonGroup, Fab, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MUI = () => {
  return (
    <div>
      <br />
      <Button size="small" variant="text">
        TEXT
      </Button>
      <Button size="medium" variant="contained">
        Contained
      </Button>
      <Button size="large" variant="outlined">
        Outline
      </Button>
      <br />
      <br />
      <div className="">
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <Grid container>
        <Grid item xs={8}>
          8
        </Grid>
        <Grid item xs={4}>
          4
        </Grid>
        <Grid item xs={4}>
          4
        </Grid>
        <Grid item xs={8}>
          8
        </Grid>
      </Grid>
    </div>
  );
};
export default MUI;
