import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "./AuthSlice";

function Login() {
  const [formData, setFormData] = useState("");

  const {name} = formData

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/looged')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {name}

    dispatch(login(userData));
  };

  const onChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <div>
        <h1>
          <FaUser /> Login
        </h1>
        <section>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
            <Button tupe="submit" variant="success">
              Entrence
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
