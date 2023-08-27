// import React from 'react'

import useAuth from "./useAuth"

// eslint-disable-next-line react/prop-types
export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    return (
        <div>
            {code}
            <div>
                {accessToken}
            </div>
        </div>
    )
}
