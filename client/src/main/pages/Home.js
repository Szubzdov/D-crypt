import PostCard from "../components/PostCard"
import { useEffect,useState } from "react";

function Home(){

    const [post, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:5000/api/posts');
          const resData = await response.json();
    
          setData(resData.PostData);
        };
    
        fetchData();
      }, []);

    return(
        <>
            <div className=" min-h-[90vh] flex items-start justify-center">
                <div className=" w-1/2 p-5 *:my-2">
                    
                    {post && post?.map(i=>{
                        return(
                            <>
                                <PostCard
                                author={i.author}
                                msg={i.msg}
                                date={i.date}
                                time={i.time}
                                media={i.media}
                                />
                                
                            </>
                        )
                    })}
                    
               
                    
                </div>
            </div>
        </>
    )
}

export default Home