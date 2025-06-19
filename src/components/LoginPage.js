import { RiShieldUserFill } from "react-icons/ri";

const LoginPage = ({setLogBtn, show, setShow}) => {
  return (
    <div>
      <div
        className={`
          z-10
          w-full h-full
          fixed top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 
          backdrop-blur-sm transition-all duration-100
          ${show? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <div
        className={`
          z-10
          w-[400px] h-[500px]
          fixed top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 
          p-6 bg-[#ffffff] rounded-xl shadow-xl transition-all duration-500
          ${show? "scale-100 opacity-100" : "scale-0 opacity-0"}
        `}
      >
        <div className="flex-col px-42 py-30">
        <RiShieldUserFill className="text-[#1fb91f] scale-1000"/>
        </div>
        <div className="flex-col relative px-8 h-24 justify-center">
          <input className="name border-1 absolute  bg-[#fbfafa] border-gray-600 rounded-sm w-2xs  pl-1" placeholder="YOUR NAME"></input>
          <button className="bg-[#1fb91f] top-[40px] absolute rounded-sm cursor-pointer w-2xs h-auto text-amber-50 font-medium " onClick={()=>{
            localStorage.setItem("username",document.querySelector(".name").value);
            setLogBtn(document.querySelector(".name").value);
             setShow(!show);
            }}>Login</button> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
