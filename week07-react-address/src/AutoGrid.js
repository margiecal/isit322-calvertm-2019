Aww yeah, Material-UI v4 is coming!
    Grid
Search…
Contents

How it works
Spacing
Fluid grids
Basic grid
Grid with breakpoints
    Interactive
Auto-layout
Complex Grid
CSS Grid Layout
Nested Grid
Limitations
Negative margin
white-space: nowrap;
API
Grid
The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.

    The new generation of project management tools is here and it’s visual.
    ads via Carbon
i

The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design’s responsive UI is based on a 12-column grid layout.

    How it works
The grid system is implemented with the Grid component:

    It uses CSS’s Flexible Box module for high flexibility.
    There are two types of layout: containers and items.
    Item widths are set in percentages, so they’re always fluid and sized relative to their parent element.
    Items have padding to create the spacing between individual items.
    There are five grid breakpoints: xs, sm, md, lg, and xl.
    Spacing
The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, 32 or 40dp wide.

    spacing
0
8
16
24
32
40
Fluid grids
Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.

    Basic grid
The column widths apply at all breakpoints (i.e. xs and up).

xs=12
xs=6
xs=6
xs=3
xs=3
xs=3
xs=3
Grid with breakpoints
    Some columns have multiple widths defined, causing the layout to change at the defined breakpoint.

    xs=12
xs=12 sm=6
xs=12 sm=6
xs=6 sm=3
xs=6 sm=3
xs=6 sm=3
xs=6 sm=3
Interactive
Below is an interactive demo that lets you explore the visual results of the different settings:

    Cell 1
Cell 2
Cell 3

direction
row
row-reverse
column
column-reverse

justify
flex-start
center
flex-end
space-between
space-around
space-evenly

alignItems
flex-start
center
flex-end
stretch
baseline
<Grid
container
direction="row"
justify="center"
alignItems="center"
    >
    Auto-layout
The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.

    import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function AutoGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
            <Grid />