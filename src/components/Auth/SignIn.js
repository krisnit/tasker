import React from "react";
import { auth, signInWithGoogle } from "../../Firebase";

const SignIn = () => {
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>SignIn With Google</button>
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div>
  );
};

export default SignIn;
