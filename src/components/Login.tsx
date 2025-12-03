function Login() {
  return (
    <>
      <form>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" required />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" id="password" required />
        </label>
        <button>Login</button>
      </form>
      <p>
        Not a member? <a href="/signup">Sign up</a>
      </p>
    </>
  );
}

export default Login;
