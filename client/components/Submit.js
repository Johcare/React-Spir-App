import React from "react";
import { browserHistory } from "react-router";

export class Submit extends React.Component {
    onNavigateHome() {
        browserHistory.push("/");

    }

    render() {
        return (
            <div id="container">
      <form method='POST' onSubmit={this.handleSubmit}>
      <label>
        Hint:
        <input type="text" />
      </label>
      </form>


      <div class="container">
        <form action="/file-upload" class="dropzone" id="dz">
            <div class="fallback">
                <input name="file" type="file" multiple />
            </div>
        </form>

    </div>

    <div class="containter">
    <h2 id="text-center">Enter Location: </h2>
    <form id="location-form">
        <input type="text" id="location-input" class="form-control form-control-lg" />
    <br />
    <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>
    <div class="card-block" id="formatted-address"></div>
    <div class="card-block" id="address-components"></div>
    <div class="card-block" id="geometry"></div>
</div>


                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>    
        );
    }
}

