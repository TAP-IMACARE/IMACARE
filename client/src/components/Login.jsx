import "./Login.css";

const Container = () => {
  return (
    <div className="login-container">
      {/* Div of the form */}
      <div className="login-form">
        <h1>Hi, Welcome Back!</h1>
        <p id="login-text">Log in to your account</p>
        <form>
        <div className="login-form-group">
    <label>Email Address</label>
    <div className="login-input-with-icon">
        <img src="mail.png" alt="Icon" className="login-icon" />
        <input type="text" placeholder="Enter your text" />
    </div>
</div>
<div className="login-form-group">
    <label>Password</label>
    <div className="login-input-with-icon">
        <span className="login-icon"><img src="lock.png" alt="Icon" /></span>
        <input type="text" placeholder="Enter your password" id="login-unique-form" />
        <span className="login-visibility-icon">
            <img src="visibility_off.png" alt="Visibility Off" />
        </span>
    </div>
</div>
          <p className="login-error">
            <img src="error.png" id="login-error-icon"/>wrong password</p>
          <div className="login-reminder">
            <div className="login-check-box">
              <input type="checkbox" id="login-remember" />
              <label for="remember" id="login-check-boxs">Remember Me</label>
            </div>
            <p>Forgot password?</p>
          </div>
          <button className="login-logging">Log in</button>
          <div className="login-horizontal-lines">
            <span className="login-lines">
              <hr></hr>
            <p className="login-or-text">Or</p>
            <hr></hr>
            </span>
          </div>
          <button id="login-google-signin">
            <img src="google-1.png"/>
            Sign in with google</button>
        </form>
        <p className="login-account-p">Don't have an account? <span>Sign up</span></p>
      </div>

      {/* Div of the image */}
      <div className="login-medic-lady">
        <img src="Imacare-5.png" alt="ImaCare" />
        <div className="login-copyright">
          <h1>Find the right healthcare provider</h1>
          <span>ⓒ IMACARE 2023. All Rights Reserved</span>
        </div>

      </div>

    </div>

  );
};

export default Container;