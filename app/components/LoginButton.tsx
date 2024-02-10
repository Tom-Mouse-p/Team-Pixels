// // components/LoginButton.tsx
// import React from "react";
// import { useAuth } from "../util/firebaseFunctions";

// const LoginButton: React.FC = () => {
//     const { user, signInWithGoogle, signOut } = useAuth();

//     return (
//         <div>
//             {user ? (
//                 <button onClick={signOut}>Sign Out</button>
//             ) : (
//                 <button onClick={signInWithGoogle}>Sign In with Google</button>
//             )}
//         </div>
//     );
// };

// export default LoginButton;
