import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./login.css"
import Swal from 'sweetalert2'


const LoginPage = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!mail || !password) {
            Swal.fire({
                text: 'Debe llenar todos los campos',
                icon: 'error'
            });
            return
        }
        if (password.length < 6) {
            Swal.fire({
                text: 'La contraseña debe tener 6 caracteres o más',
                icon: 'error'
            });
            return
        }
        Swal.fire({
            text: 'Inicio de sesión exitoso',
            icon: 'success'
        });
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className=" box d-flex justify-content-center align-items-center mt-2 radius">
                    <div className="boxImage"></div>
                    <div className="boxInside d-flex justify-content-center align-items-center ">
                        {/* <form onSubmit={handleSubmit} className="d-flex flex-column">
                            <p className="titulo">Login</p>
                            <div>
                                <p>Email</p>
                                <input
                                    type="email"
                                    placeholder="mail@dominio.com"
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </div>
                            <div>
                                <p>Password</p>
                                <input
                                    type="password"
                                    placeholder="******"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button variant="dark" type="submit">
                                Login
                            </Button>
                        </form> */}
                        <Form onSubmit={handleSubmit}>
                            <p className="titulo">Login</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="mail@dominio.com"
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="******"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage