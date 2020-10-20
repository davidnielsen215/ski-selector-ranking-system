import React, { Component } from 'react';
       
export default class CheckboxTest extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {id: 1, value: "PHP"},
        {id: 2, value: "Laravel"},
        {id: 3, value: "Angular"},
        {id: 4, value: "React"}
      ],
      checkedItems: new Map()
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
        var isChecked = event.target.checked;
        var item = event.target.value;
         
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
     
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
     
  render() {
    return (
      <div>
        <h1>React Multiple Checkbox Example - ItSolutionStuff.com</h1>
  
        <form onSubmit={this.handleSubmit}>
           
          {
            this.state.categories.map(item => (
              <li>
                <label>
                  <input
                    type="checkbox"
                    value={item.id}
                    onChange={this.handleChange}
                  /> {item.value}
                </label>
              </li>
            ))
          }
           
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
   
