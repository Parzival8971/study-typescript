import React from 'react';
import './App.css';
import axios from 'axios';

const requestAPI = () => {
  // const url = 'http://todosvc.herokuapp.com/todolist/gdhong';
  // const url = 'http://localhost:8000/todolist/gbhong';
  const url = '/api/todolist/gdhong';
  axios.get(url).then((response) => {
    console.log('# 응답 객채 : ', response);
  });
};

requestAPI();

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Console.log를 확인하세요</h2>
      </header>
    </div>
  );
}

export default App;
