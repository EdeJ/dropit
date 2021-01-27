import React, { useEffect, useState } from 'react'
import { axiosConfig } from '../axios/axiosConfig';
import { useAuthentication } from '../hooks/authentication';

function MyProfile() {

    const { user } = useAuthentication()
    const [userData, setUserData] = useState()

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axiosConfig.get(`/home/${user.username}`, { headers: { Authorization: user.accessToken } })
                setUserData(result.data)

            } catch (error) {

                console.error(error);
            }
        }
        fetchData()

    }, [])

    return (
        <div>
            <h3>My Profile</h3>
            <div>
                {userData && (
                    <>
                        <p>id: {userData.id}</p>
                        <p>username: {userData.username}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default MyProfile
