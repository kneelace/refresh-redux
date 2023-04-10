import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlice';


const Auth = () => {

    const loginDispatch = useDispatch();
    const onSubmitHandler = (event) => {

        event.preventDefault();
        loginDispatch(authActions.toggleAuth())
    }


    return (
        <>
            <main className={classes.auth}>
                <section>
                    <form onSubmit={onSubmitHandler}>
                        <div className={classes.control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" />
                        </div>

                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Auth;