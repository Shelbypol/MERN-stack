import React from 'react';
import Button from "reactstrap/es/Button";

export class ColorChangeBtn extends React.Component {
    render() {
        return (
            <Button onClick={this.props.onClick}
                    color="primary"
                    style={{marginLeft: '2rem'}}
                    className={ this.props.light ? 'light-button' : 'dark-button' }>
                Refresh
            </Button>
        );
    }
}
