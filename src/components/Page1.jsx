// import {useState} from 'react';

// const Page1 = () => {

//     const [email, setEmail] = useState();
//     console.log(email)
//     return (
//         <div className="container d-block justify-content-center p-5">
//             <h1 className="text-center">Page1</h1>
//             <form>
//                 <div className="row mb-3">
//                     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//                     <div className="col-sm-10">
//                         <input 
//                             type="email" 
//                             className="form-control" 
//                             id="inputEmail3" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="row mb-3">
//                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//                     <div className="col-sm-10">
//                         <input type="password" className="form-control" id="inputPassword3" />
//                     </div>
//                 </div>
                
//                 <button type="submit" className="btn btn-primary">Sign in</button>
//             </form>
//         </div>

//     );
// }

// export default Page1;






import { useState } from 'react';

const Page1 = () => {
    // Initialize email with an empty string to ensure it is controlled from the start
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email);

    const handleSubmit = () =>{
        const cridentials = { 'email': email, 'password': password}
        alert(JSON.stringify(cridentials));


        // e.preventDefault(); // Prevent the default form submission behavior
        // const cridentials = { email, password };
        // alert(JSON.stringify(cridentials)); // Display the credentials as a string
    }
    

    return (
        <div className="container d-block justify-content-center p-5">
            <h1 className="text-center">Page1</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail3" 
                            value={email} // Controlled input
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword3" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
}

export default Page1;
