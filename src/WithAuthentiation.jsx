import React from 'react'

const isAuthenticated=true;
export default function WithAuthentiation(Component) {
    
    return function (){
        if(!isAuthenticated){
            return <div>User not Authenticated</div>
        }
        return <Component />
    }
}
