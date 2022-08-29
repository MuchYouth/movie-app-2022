import React from 'react';
// (방법1) import Potato from './Potato'; // index.js파일에서 potato component를 이용하기위해서 app컴포넌트의 자식요소로 만들어주는 작업
import PropTypes from 'prop-types';

function Food({name, picture, rating }) { // props에 fav,something, papapapa props가 넘어온다.
  // console.log(props); --> 콘솔창에만 출력된다.
  //console.log(foodILike.map(renderFood)); // map함수의 반환값알아보기
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    );
}

const foodILike = [
  {
    id : 1,
    name: 'Kimchi',
    image: 'https://www.hankyung.com/life/article/2021081031847',
    rating:5,
  },
  {
    id : 2,
    name: 'Samgyeopsal',
    image: 'https://www.mindgil.com/news/articleView.html?idxno=70839',
    rating : 4.9,
  },
  {
    id : 3,
    name: 'Bibimbap',
    image: 'https://m.blog.naver.com/estelle926/220990979291',
    rating : 4.8,
  },
  {
    id : 4,
    name: 'Doncasu',
    image: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=28004866&memberNo=3600238',
    rating : 4.9,
  },
  {
    id : 5,
    name: 'Kimbap',
    image: 'https://m.10000recipe.com/recipe/6851844',
    rating : 5,
  },
]; // 서버에서 넘어오는 변수를 저장할수있도록 빈배열 할당

/*function renderFood(dish) {
  return <Food name = {dish.name} picture={dish.image} />;
}*/
/*화살표 함수로 표현하기
const renderFood = dish => <Food name={dish.name} picture={dish.image} />;
*/

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.number.isRequired,
  picture : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
};
// fav는 favorite의 줄임말로 props의 이름은 fav이고, fav에 "kimchi"라는 값을 담아 food컴포넌트에 보낸것
export default App;