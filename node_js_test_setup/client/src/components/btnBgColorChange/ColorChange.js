import React from "react";
import { ColorChangeBtn} from "./ColorChangeBtn";

export class ColorChange extends React.Component{

    constructor(props){
        super(props);
        this.state = { color: [120, 123, 240]};
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a,b) => a+b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }

    handleClick() {
        this.setState({
            color: this.chooseColor()
        })
    }

    render() {
        return (
            <div>
                <ColorChangeBtn onClick={this.handleClick} light={this.isLight()} />
            </div>
        );
    }
}