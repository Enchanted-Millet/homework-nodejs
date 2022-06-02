import React,{useState, useEffect} from "react";
import axios from "axios";
import "./style.css"

const FetchData = () => {

    const [year, setYear] = useState("");
    const [user, setUsesr] = useState([]);
    const [userDetail, setUserDetail] = useState([]);
    const [hasData, sethasData] = useState(false);
     useEffect(() =>{

         const getData = async () =>{
            const result = await axios(

                //"https://hn.algolia.com/api/v1/search?query=react"
        //"https://jsonplaceholder.typicode.com/posts?userId=1"
       // "https://jsonplaceholder.typicode.com/albums",
       // { params: { userId: year } }
        // Equivalent to `axios.get('https://httpbin.org/get?answer=42')`
        //   'https://httpbin.org/get', { params: { answer: year } }

        //         res.data.args; // { answer: 42 }
               // "https://api.github.com/users?per_page=100" 
               "https://api.github.com/users",
               { params: { per_page: 10 } }
            )

            console.log(result);

             setUsesr(result.data);
         }
         
         getData();

     }, []);

     const handleDetail =  (name) => (event)=>{
         const getDetail = async () =>{
            const result = await axios(
               `https://api.github.com/users/${name}`,
               
            )

            console.log(result);

             setUserDetail(result.data);
         }
         
         getDetail();
         sethasData(true);
         console.log(userDetail)

     }

    return (
    <div className="hw2_table_conatiner">
        <div className="hw2_table_div1">
         <p>List</p>
         <table>
             <thead>
                 <td>ID</td>
                 <td>Username</td>
                <td>Image</td>
            </thead>
               <tbody>
               {
                   user && user.map((item, index) => (
                    <tr key={item.id} onClick={handleDetail(item.login)}>
                        <td>{item.id}</td>
                        <td>{item.login}</td>
                        <td><img src={item.avatar_url} alt="avatar" height="50px" width="50px"></img></td>
                    </tr>
                  ))
               }
                </tbody>
            </table>
        </div>
        <div className="hw2_table_div2">
        <p>Detail:</p>
            {
                hasData?  <div><div><label>Name:</label><span>{ userDetail.name}</span></div>
            <div><label>Location:</label> <span>{ userDetail.location}</span></div>
            <div><label>Following:</label> <span>{ userDetail.following}</span></div>
            <div><label>Follower:</label> <span>{ userDetail.followers}</span></div></div> : null
            }
            

        </div>
      
    </div>
    )


}

export default FetchData;