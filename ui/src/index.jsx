import React from 'react';
import ReactDOM from 'react-dom';

var properties = [{description: "a", rent: 600, squareMetres: 65},
  {description: "b", rent: 700, squareMetres: 75},
  {description: "c", rent: 800, squareMetres: 85}];

class Property extends React.Component {
  render() {
    return (<section>
        {this.props.property.description}
        {this.props.property.rent}
        {this.props.property.squareMetres}
      </section>);
  }
};

class PropertyList extends React.Component {
  render() {
    var properties = this.props.properties.map(function(property) {
      return React.createElement(Property, { property: property });
    });
                  
    return (<div>
        <h1>Properties</h1>
        <p>This is a list of available properties</p>
        {properties}
      </div>);
  }
};

document.addEventListener("DOMContentLoaded", function(){
  var container = document.querySelector("#container");
  ReactDOM.render(<PropertyList properties={properties}></PropertyList>, container);
});

