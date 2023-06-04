import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import loginImage from "../../../Assets/login.png"; // Notez cette ligne
import '../../../style.css';
import { Link } from 'react-router-dom';  // Importer le composant Link

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Nouvel état pour les messages d'erreur
  const [restaurant, setRestaurant] = useState('H&H corp');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password, restaurant };

    try {
      const response = await axios.post('http://localhost:3500/api/auth/login', data);

      if (response.data.error) {
        setErrorMessage(response.data.error); // Mettez à jour le message d'erreur avec la réponse du serveur
      } else {
        console.log('Login successfully');
        setErrorMessage(''); // Effacer le message d'erreur en cas de succès
        // handle success
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred'); // Mettez à jour le message d'erreur avec une erreur générique
      // handle error
    }
  };

  return (
    <div>
      <img className="image-class" src={loginImage} alt="card-img" />
      <Card className="projectd-card-view">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Afficher le message d'erreur s'il existe */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRestaurant">
                <Form.Control type="hidden" name="restaurant" value={restaurant} />
            </Form.Group>


            <Button variant="primary" type="submit">
              Login
            </Button>
            
            <p className="mt-3">
        {/* Remplacer <a> par <Link> */}
        Doesn't have an account? <Link to="/signup">Signup</Link>  
      </p>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default LoginCard;
