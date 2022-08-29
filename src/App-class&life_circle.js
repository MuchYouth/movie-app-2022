import React from 'react';
//클래스형 컴포넌트
class App extends React.Component {
    constructor(props){
        super(props); // constructor함수를 쓰려면 반드시 작성해야하는 부분 (초기화나 메서드 바인딩 효과)
        console.log('hello');
    }

    conmponentDidMount() {
        console.log('component rendered');
    }

    componentDidUpdate() {
        console.log('I just updated');
    }

    componentWillUnmount() {
        console.log('Goddbye, cruel world!!!'); // 컴포넌트에 적용한 이벤트 리스너를 제거할때 사용
    }
    state = {
        count : 0,
    };

    add = () => {
        // console.log('add');
        this.setState(current => ({
            count : current.count + 1 }));
    };

    minus = () => {
        // console.log('minus');
        this.setState(current => ({
            count : current.count - 1 }));
    };

    render(){
        console.log("I'm rendering");
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick = {this.add}>Add</button>
                <button onClick = {this.minus}>Minus</button>
            </div>
        );
    }
}
export default App;
