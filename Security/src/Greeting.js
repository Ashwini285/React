function UserGreeting(){
    return <h2> Welcome User !!! </h2>
}

function GuestGreeting(){
    return <h2> Please Login !!! </h2>
}


function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    // conditional Rendering 
    if(isLoggedIn){
        return <UserGreeting />
    }else {
        return <GuestGreeting />
    }
    

}

export default Greeting;