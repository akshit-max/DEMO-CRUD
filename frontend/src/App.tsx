import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Notes from "./pages/Notes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true); 
      } else {
        setLoggedIn(false);
        localStorage.removeItem("token");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

 
  useEffect(() => {
    const saveToken = async () => {
      if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        localStorage.setItem("token", token);
      }
    };
    if (loggedIn) saveToken();
  }, [loggedIn]);

  if (loading) return <h3>Loading auth…</h3>;

  return loggedIn ? <Notes /> : <Login />;
};

export default App;
