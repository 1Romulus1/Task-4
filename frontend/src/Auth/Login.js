import {Button} from 'react-bootstrap'
import {useState} from 'react'
import {FaUser} from 'react-icons/fa'

function Login() {
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e)=> {
    setName(e.target.value)
  }


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
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </form>
        </section>
        <Button tupe="submit" variant="success">
          Entrence
        </Button>
      </div>
    </>
  );
}

export default Login