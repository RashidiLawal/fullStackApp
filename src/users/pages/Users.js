import React, {useEffect, useState} from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner"

const Users = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [loadedUser, setLoadedUser] = useState(true)
 useEffect(() => {
   const sendRequst = async () => {
    setIsloading(true);
    try {
      const response = await fetch('http://localhost:5000/api/users');
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      };

      setLoadedUser(responseData.users);
    } catch (err) {
      setError(err.message);
    }
    setIsloading(false);
  };
  sendRequst();
}, []);

const errorHandler = () => {
  setError(null);
}

  return (
    <>
    <ErrorModal error={error} onClear={errorHandler} />
    {
      isloading && <div className="center"><LoadingSpinner/></div>
    }
    {
      !isloading && loadedUser && <UsersList items={loadedUser} />
    }
    
    </>
  )
};

export default Users;
