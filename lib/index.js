import "./index.css"
import { Component } from "react"
import util from "util.react"
import props from "./props"
import classnames from 'classnames'
class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: props.light,
            star: props.star,
            disable: props.disable,
            icon: props.icon,
        }
    }
    click(e){
        let key = e.target.dataset.key
        if(!this.state.disable){
            this.setState({
                light: key
            })
        }
    }
    render() {
        let self = this
        let count = this.state.star
        let cnt = []
        for(let i = count; i >= 1 ; i--){
            cnt.push(
                <span className={classnames({
                    [self.props.prefixClass+'-item']: true,
                    [self.props.prefixClass+'-item--on']: i <= this.state.light
                })} data-key={i} onClick={this.click.bind(this)} key={i}>{this.state.icon}</span>
            )
        }
        return (
            <div className={classnames({
                'rc-star': true,
                [self.props.wrapClass]: self.props.wrapClass
            })}>
               {cnt}
            </div>
        );
    }
}
props(Star)
export default Star
