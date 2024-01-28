const PostCard = props =>{
    return(
        <div className="border-2 border-green-500 rounded-xl ">
                        <button className='bg-green-600 rounded-lg w-full flex justify-between p-2'>
                            <p className=' p-3'> @{props.author}</p>
                            <div className='text-end'>
                                <p>{props.date}</p>
                                <p>{props.time}</p>
                            </div>
                        </button>
                        <div className='p-5'>
                           {props.msg}
                        </div>
                        <div className='p-5 *:max-w-[250px] flex flex-wrap justify-evenly items-center'>
                            {props.media.map(med=>{
                                return(
                                   <>
                                        {med.type==="picture" && 
                                            <img src={require('../../assets/dunder_mifflin_scranton_cover (1).jpg')} alt=""/>
                                        
                                        }
                                        {med.type==="video" && 
                    
                                            <video src={require('../../assets/23uEnbdbOIqpZxR9J2Uazct915wSWGBb.mp4')}>

                                            </video>
                                        
                                        }
                                   </> 
                                )
                            })}  
                            
                        </div>
                    </div>
    )
}

export default PostCard