import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
  // const dispatch = useAppDispatch();
  // const { users, error, isLoading } = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    <div className="App">
      WORK!
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
      <PostContainer2 />
    </div>
  );
}

export default App;
