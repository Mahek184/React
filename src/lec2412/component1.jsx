import *  as React from "react";
class Component2 extends React.Component {
    render() {
        return <h2>Component2</h2>;
    }
}
class Component3 extends React.Component {
    render() {
        return <h3>Component3</h3>;
    }
}

class Component1 extends React.Component {
    render() {
        return (
            <div>
                <h1>Component1</h1>
                <h2>Hello</h2>
                <Component2/>
                <Component3/>
            </div>
        );
    }
}
export default Component1;

