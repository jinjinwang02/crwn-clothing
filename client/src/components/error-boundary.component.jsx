import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }
    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <div className="error-image-overlay">
                    <div className="error-image-container" />
                    <div className="error-image-text">A dog ate this page.</div>
                </div>
            )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;