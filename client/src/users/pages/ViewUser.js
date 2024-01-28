import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { id_user } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_user }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();
        setUserData(result);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id_user]);

  return (
    <>
      <div className="min-h-[90vh] flex items-start justify-center">
        <div className="w-1/2 p-5 my-2 grid">
        {userData && Array.isArray(userData) ? (
            userData.map((user) => (
              <div key={user._id}>
                {/* Display information about the user */}
                <p>{user.nick}</p>
                <p>{user.email}</p>
                {/* and so on */}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
          
        </div>
      </div>
    </>
  );
}

export default ViewUser;
