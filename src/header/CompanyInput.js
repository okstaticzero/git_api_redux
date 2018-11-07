
import React from 'react';
import { Form, Button, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getUserList } from '../redux/actions.js'

class CompanyInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "google" }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchUserList(this.state.value);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <div className="formConatainer">
                <Form onSubmit={this.handleSubmit} inline>
                    <FormControl
                        type="text"
                        inline
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter text"
                    />
                    <Button type="submit" bsStyle="primary">Submit</Button>
                </Form>
                <h4 className="instructions">Enter oranization name to view members</h4><p>Try: ibm, facebook, etc.</p><br />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: (company) => {
            dispatch(getUserList(company))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CompanyInput)
