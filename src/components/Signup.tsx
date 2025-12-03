function Signup() {
  return (
    <>
      <form>
        <h1>Sign up!</h1>
        <label htmlFor="first-name">
          First Name:
          <input type="text" id="first-name" required />
        </label>

        <label htmlFor="last-name">
          Last Name:
          <input type="text" id="last-name" required />
        </label>

        <label htmlFor="username">
          Username:
          <input type="text" id="username" required />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" id="password" required />
        </label>
        <button>Sign Up</button>
      </form>
      <p>
        Already a member? <a href="/login">Login!</a>
      </p>
    </>
  );
}

export default Signup;
