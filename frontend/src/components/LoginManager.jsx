import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "@/components/ui/button.jsx";

const LoginManager = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);

  const URL_USER = 'http://localhost:8000/race/api/user/';
  const URL_LOGOUT = 'http://localhost:8000/race/api/logout/';

  useEffect(() => {
    axios
      .get(URL_USER, { withCredentials: true })
      .then((response) =>
        setUsername(response.data.username)
      )
      .catch(() =>
        console.log('user not logged in')
      );
  }, []);

  const handleLogout = () => {
    axios
      .get(URL_LOGOUT, { withCredentials: true })
      .then(() => {
        setUsername(null);
        navigate('/');
      })
      .catch(() =>
        console.log('logout failed')
      );
  };

  return (
    <div className="flex items-center justify-end w-full gap-4 p-4 bg-background">
      {username ? (
        <>
          <p className="font-medium text-foreground">Olá {username}!</p>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </>
      ) : (
        <>
          <p className="font-medium text-foreground">Olá, não estás logado(a)!</p>
          <Button onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button onClick={() => navigate('/signup')} variant="outline">
            Signup
          </Button>
        </>
      )}
    </div>
  );
};

export default LoginManager;