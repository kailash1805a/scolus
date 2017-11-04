import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoBar extends Component {
    render() {
        if (!this.props.infoBar) {
            return;
        }
        return (
            <div className="info-bar-container">
                <div className="info-bar-form float-left">
                    <span className="float-left padding-right-left form-link"><a href="#">Sign In</a></span>
                    <span className="float-left padding-right-left">|</span>
                    <span className="float-left padding-right-left form-link"><a href="#">Sign Up</a></span>
                </div>
                <div className="pointer-element float-right">
                    <span className="padding-right-left pointer-element">{this.props.infoBar.contactNo}</span>
                    <span className="padding-right-left">|</span>
                    <span className="padding-right-left pointer-element">{this.props.infoBar.emailId}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        infoBar: state.infoBar
    }
}

export default connect(mapStateToProps)(InfoBar);