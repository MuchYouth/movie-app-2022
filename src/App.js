import React from 'react';
//클래스형 컴포넌트
class App extends React.Component {
    state = {
        isLoading : true,
        movies : [],
    };

    componentDidMount() {
        //영화데이터로딩!
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }

    render(){
        const {isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
    }
}
export default App;
