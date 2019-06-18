import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    typography: {
        color: theme.palette.primary.dark
    },
    button: {
        margin: theme.spacing.unit
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            address: {
                firstName: 'unknown',
                lastName: 'unknown',
                state: 'unknown'
            }
        };
    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({
            address: {
                firstName: 'Patty',
                lastName: 'Murray',
                state: 'Washington'
            }
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper>
                    <Typography
                        className={classes.typography}
                        variant="h5"
                        gutterBottom
                    >
                        Welcome to Elf Address
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography
                        className={classes.typography}
                        variant="body1"
                        gutterBottom
                    >
                        {this.state.address.firstName}
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography
                        className={classes.typography}
                        variant="body1"
                        gutterBottom
                    >
                        {this.state.address.lastName}
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Button
                        id="getFileAction"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.getFile}
                    >
                        Get File
                    </Button>
                </Paper>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
