import React, { useEffect, useState } from 'react'

const UserCard = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users?per_page=100");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
      
            <div className="container">
               <span>ID</span>
               <span>Username</span>
               <span>Images</span>
                {
                    users.map((curElem) => {
                        return (
                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <span className="userUrl">{curElem.id}</span>
                                    <span className="userName">{curElem.login}</span>
                                    <img src={curElem.avatar_url} alt="" />


                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default UserCard;

