import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../../store/store.js';
import './Card.css';

const Card = ({ userData, individualData }) => {
  // Code to display the full user list
  // const userList =
  //   userData[0] &&
  //   userData[0].map((data) => {
  //     return (
  //       <div key={data.id} className="card">
  //         <p className="id">{data.id}</p>
  //         <div className="avatar-div">
  //           <img src={data.avatar} alt="" />
  //         </div>
  //         <p className="first-name">{data.first_name}</p>
  //         <p className="last-name">{data.last_name}</p>
  //         <p className="email">{data.email}</p>
  //       </div>
  //     );
  //   });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.isLoading);

  // Function to fetch data of user with id
  const btnClickHandler = (e) => {
    const getIndividualData = async (id) => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch(dataActions.setIndividualData(response.data.data));
    };
    getIndividualData(e.target.innerText);
    dispatch(dataActions.setIsLoading(false));
  };

  return (
    <div className="user-data">
      {individualData ? (
        <div className="card m-3 w-25 mb-3">
          <div className="avatar">
            {loading && <p className="skeleton-image"></p>}
            <img
              className={`card-img-top`}
              src={individualData.avatar}
              alt=""
            />
            {loading && <p className="skeleton"></p>}
            <p className={`card-title h1 my-3 `}>
              {individualData.first_name} {individualData.last_name}
            </p>
            {loading && <p className="skeleton-small"></p>}
            <p className={`card-subtitle h5 my-2 `}>{individualData.email}</p>
          </div>
        </div>
      ) : (
        <p className="mx-3 h1 my-5">Click on a button to get user data</p>
      )}
      <div className="buttons mx-2">
        {userData &&
          userData.map((data, index) => {
            return (
              <button
                onClick={btnClickHandler}
                key={data.id}
                className="btn btn-primary mx-2"
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
