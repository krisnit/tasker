import React from "react";
import { auth, signInWithGoogle } from "../../Firebase";

const SignIn = () => {
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>SignIn With Google</button>
    </div>
  );
};

export default SignIn;
