import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function Users(){

    const [user, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:5000/api/users/contacts');
          const resData = await response.json();
    
          setData(resData.filteredAuthData);
        };
    
        fetchData();
      }, []);

    return(
        <>
          
             <div className=" min-h-[90vh] flex items-start justify-center">
                <div className=" w-1/2 p-5 *:my-2  grid">
                  
                    {user && user.map(u=>{
                        return <Link to={`/contacts/${u._id}`} className="px-2 border-b-2 border-green-500 flex justify-between">
                                <p>
                                    {u.nick}
                                </p>
                                <p>
                                    {u.email}

                                </p>
                            </Link>
                            
                    })}
                    
                     
                </div>
                
            </div>
        </>
    )
}

export default Users