import { useState } from "react";

function Card() {
    //Declare state variables using useState hook
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        //validating email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        //validating password
        if (!password || password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        //handle errors
        if (Object.keys(errors).length > 0) { //if theres any errors it will be store in this object
            setError('Invalid email or password.');
            setSuccess('');
        } else { 
            setError('');
            setSuccess('Login successful!');
            //clearing fields after successful submission
            setEmail('');
            setPassword('');
        }
        
    }


    return (
      <div style={{width:'100vw', height:'100vh'}}className="flex justify-center items-center h-screen w-screen bg-orange-100 text-white">
        <div className="absolute top-40 blur w-52 h-52 rounded-full bg-red-500"> </div>
        <div className="absolute top-2/5 left-40 blur w-96 h-96 rounded-full bg-green-600"> </div>
        <div className="absolute top-3/4 left-1/2 blur w-96 h-96 rounded-full bg-sky-500"> </div>

        {/* Login form section */}
        <section style={{width:'480px', height:'600px'}} className=" bg-opacity-20 z-10 bg-black rounded-lg text-black flex flex-col flex-nowrap items-center justify-evenly ">

            {/* Welcome message */}
          <div className="flex flex-col self-start ml-8" >
              <h1 className="flex self-start text-4xl">Welcome Back!</h1>
              <p className="flex self-start  ">Login to start</p>
          </div>
          <form action="" 
          method="post" 
          autoComplete="on" 
          onSubmit={handleSubmit} 
          className=" w-1/2 h-1/2 flex flex-col flex-nowrap items-center justify-evenly">

            {/* Email input */}
            <input
             type="email" 
             name="emailtxt" 
             id="iemail" 
             autoComplete="on" 
             required 
             placeholder="Email" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="bg-white rounded-full w-56 h-12 p-3 "/>
             
            {/* Password input */}
            <input 
            type="password" 
            name="passwordtxt" 
            id="ipassword" 
            required 
            minLength="8" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white rounded-full w-56 h-12 p-3" />

            {/* Submit button */}
            <input 
            type="submit" 
            value="Continue" 
            className={`bg-white rounded-full w-56 h-12 p-3 ${error && !/\S+@\S+\.\S+/.test(email) && 'border-red-500'}`}/>
          </form>
          
          {/* Error and success messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </section>
      </div>
    );
  }
  
  export default Card;
  