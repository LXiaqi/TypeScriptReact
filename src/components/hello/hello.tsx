import React from 'react';
import './hello.less'
// 定义 props 类型
export interface Props {
    name:string;
    symbol?:number;
}
// 定义state 类型
export interface State {
    currentval:number;
}
// 定义一个函数式组件
// function Hello({name,symbol = 1} : Props) {
//     if(symbol <= 0) {
//         alert('长度小于等于0了');
//     }
//     return(
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name + getExclamationMarks(symbol)}
//             </div>
//         </div>
//     )
// }
// 定义一个 类组件
class Hello extends React.Component<Props,State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            currentval: props.symbol || 1
        }
    };
    onDecrement = () => {
        if(this.state.currentval !== 0) {
          this.setState({
            currentval:this.state.currentval - 1
          })
        }else {
          alert('不能再减了哟， 宝贝！')
        }
    
      };
      onIncrement = () => {
        this.setState({
          currentval:this.state.currentval + 1
        })
      };
    render() {
        const {name} = this.props;
        if (this.state.currentval <= 0) {
            console.log('You could be a little more enthusiastic. :D');
          }
        return(
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentval)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }
};
function getExclamationMarks(numChars:number) {
    return Array(numChars + 1).join('！');
}
export default Hello;