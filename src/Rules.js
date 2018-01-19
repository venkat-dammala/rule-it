import React,  { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
export default class Rules extends Component {
    render() {
        return (
          <Form>
            <h3>Add Rules</h3>
            <div>
                <label>
                    Rule Id
                    <Input type = "text" name='ruleId' validations={[required]}/>
                </label>
            </div>
            <div>
                <label>
                    Description
                    <Input type='text' name='desc' validations={[required]}/>
                </label>
            </div>
            <div>
                <Button>Add</Button>
            </div>
        </Form>
        );
      }
}
