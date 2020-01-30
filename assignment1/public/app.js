import React from 'react';
import ReactDOM from 'react-dom';
const element = React.createElement("div", null, React.createElement("div", null, React.createElement("h1", null, "Shubham Deshpande")), React.createElement("div", null, React.createElement("h1", null, "Photo")), React.createElement("div", null, React.createElement("h1", null, "GitHub Link")));
ReactDOM.render(element, document.getElementByTagName('body'));