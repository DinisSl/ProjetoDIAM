import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const SIGNUP_URL = 'http://localhost:8000/race/api/signup/';

const Signup = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(SIGNUP_URL, { first_name, last_name, email, password })
      .then((response) => {
        console.log('Signup successful!', response.data.msg);
        navigate('/');
      })
      .catch((err) =>
        console.log('Signup failed...', err.response.data.msg)
      );
  };

  return (
    <>
    <Header/>

    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Signup</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex gap-4">
              <Label htmlFor="first_name">First name:</Label>
              <Input
                id="first_name"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <Label htmlFor="second_name">Last name:</Label>
              <Input
                id="second_name"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password:</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full mt-2">
              Signup
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

    <Footer/>
    </>
  );
};

export default Signup;