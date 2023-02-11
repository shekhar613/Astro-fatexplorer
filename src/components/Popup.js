import React from 'react';

const Popup = (props) => {
    return (
        (props.trigger) ? (
            <div className="alert alert-success alert-dismissible fade show mx-2 my-4" role="alert">
                <strong>Submited !</strong> successfully Submited , soon you will get respons
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        ) : ""

    );
}

export default Popup;
