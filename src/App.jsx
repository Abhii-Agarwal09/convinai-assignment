import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from './store/store.js';

import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch(
        dataActions.setData({
          data: response.data.data,
        })
      );
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector((state) => state.data[0]);
  const individualData = useSelector((state) => state.individualData);
  

  return (
    <div className="app">
      <Navbar />
      <Card userData={data} individualData={individualData} />
    </div>
  );
};

export default App;
