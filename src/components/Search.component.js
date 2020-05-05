import React, { Component } from 'react';
import axios from 'axios';

export default class dataSearch extends Component {
    constructor(props) {
      super(props);

      this.onChangequery = this.onChangequery.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          query: ''
      }
    }

    onChangequery(e) {
        this.setState({
            query: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const search = {
            query: this.state.query
        }

        console.log(search);

        axios.get('http//localhost:5000/users', search)
            .then(res => console.log(res.data));

            this.setState({
                query: ''
            })
        
    }

    render() {
        return (
            <div>
                <h3> Search for a specific entry</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label> Search For: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.search}
                            onChange = {this.onChangequery}
                            />
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Search" className = "btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}