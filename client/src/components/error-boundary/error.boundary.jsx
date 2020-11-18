import React from 'react';
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        };
    }


    static getDerivedStateFromError(error) {
        //process the Error
        return {hasErrored: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imgUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>);
        }
        return this.props.children;
    }
}


export default ErrorBoundary;