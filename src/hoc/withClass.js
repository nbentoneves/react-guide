import React from 'react';

//107. You should pass the properties to the Wrapped component
const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default WithClass;