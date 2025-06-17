import { useRouteError } from "react-router";

const Error=()=>{
    // const err=useRouteError();
    return(
        // <h1>{err.status}:{err.statusText}</h1>
        <img className="errorPage" src="https://as2.ftcdn.net/jpg/04/62/17/61/1000_F_462176185_twMkP0lw8qy3NTFD9rOV6A17AiOJPUKE.jpg"></img>
    )
}

export default Error;