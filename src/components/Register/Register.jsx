import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/context/auth-context";

const Register = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
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
      let response = await signup(data.email, data.password, data.name);
      if (response) {
        setLoading(false);
        navigation("/chat");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
                  <span style={{ fontSize: "20px" }}>
                    Explorez l'univers des
                  </span>{" "}
                  <br /> messages
                  <br /> <span style={{ fontSize: "23px" }}>avec</span> <br />
                  nous!
                </h4>
              </div>
              <div className="right-content">
                <h3 className="form-title">S'enregistrer</h3>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nom et prénom</label>
                    <input
                      required
                      value={data.name}
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      required
                      value={data.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      required
                      value={data.password}
                      onChange={handleChange}
                      name="password"
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
                  Vous avez déjà un compte ? <Link to="/">Connectez-vous</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
