
import React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const sports = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

class CustomMultiSelect extends React.Component {
    state = { value: [] };

    handleChange = (event) => {
        const values = event.target.value;
        const lastItem = values[values.length - 1];

        if (lastItem) {
            values.pop();
            const sameItem = values.find(value => value === lastItem);
            if (sameItem === undefined) {
                values.push(lastItem);
            }
        }

        this.setState({
            value: values
        });
    }

    render() {
        return (
            <div>
                <div className="group-config">
                    Group
                </div>
                <MultiSelect
                    data={sports}
                    onChange={this.handleChange}
                    value={this.state.value}
                    allowCustom={true}
                />
            </div>
        );
    }
}

export default CustomMultiSelect


