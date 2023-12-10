import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/context/auth-context";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const { login } = useAuth();
  const navigation = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await login(data.email, data.password);
      console.log(response)
      if (response) {
        setLoading(false);
        navigation("/chat");
      }
    } catch (error) {
      setLoading(false);
      if(error == "Firebase: Error (auth/invalid-credential).") 
        setError("Mot de passe ou email incorrect")
      else 
        setError("Une erreur est survenue")
    }
  };

  return (
    <div className="form-bg">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-8 col-sm-6">
            <div className="form-container">
              <div className="left-content">
                <h3 className="title">Super Messenger</h3>
                <h4 className="sub-title">
                  <span style={{ fontSize: "20px" }}>Connectez-vous</span>{" "}
                  <br /> à l'essence
                  <br /> <span style={{ fontSize: "23px" }}>des</span> <br />
                  mots
                </h4>
              </div>
              <div className="right-content">
                <h3 className="form-title">Login</h3>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      required
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      name="password"
                      required
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <button className="btn signin">
                    {loading ? "Chargement..." : "Connexion"}
                  </button>
                </form>
                <span className="separator">OR</span>
                <ul className="social-links">
                  <li>
                    <a href="">
                      <i className="fab fa-google"></i> Connectez-vous avec
                      Google
                    </a>
                  </li>
                </ul>
                <span className="signup-link">
                  Vous n'avez pas de compte ?{" "}
                  <Link to="/register">Inscrivez-vous ici</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
