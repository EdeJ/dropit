import React from 'react';

function AddDemo() {


    return (
        <div className="full-page">
            <h3>Add new demo</h3>
            <form action="localhost:8080/files" method="post">
                <input type="file" id="myFile" name="filename" />
                <input type="submit" />
            </form>
        </div>

    )
}

export default AddDemo
