import "../styles/auth.css";
import Field from "../src/components/Field";

function SignUpScreen() {
  return (
    <div className="signup-page">
      <div className="signup-back">←</div>

      <h1 className="signup-title">
        Create Your
        <br />
        JAMP Account
      </h1>

      <p className="signup-subtitle">
        Join thousands of students already preparing and winning.
      </p>

      <Field icon="👤" placeholder="Full Name" />
      <Field icon="✉" placeholder="Email Address" />
      <Field icon="📞" placeholder="Phone Number" />
      <Field icon="🔒" placeholder="Create Password" right="👁" />
      <Field icon="🔒" placeholder="Confirm Password" right="👁" />

      <div className="terms-row">
        <div className="checkbox" />

        <div className="terms-text">
          I agree to the
          <span className="primary-text"> Terms of Use </span>
          and
          <span className="primary-text"> Privacy Policy</span>
        </div>
      </div>

      <button className="signup-btn">Sign Up</button>

      <div className="divider-row">
        <div className="divider-line" />

        <span className="divider-text">or sign up with</span>

        <div className="divider-line" />
      </div>

      <div className="social-row">
        <div className="social-btn">
          <span className="google-icon">G</span>
          Google
        </div>

        <div className="social-btn">
          <span className="facebook-icon">f</span>
          Facebook
        </div>
      </div>

      <div className="bottom-text">
        Already have an account?
        <span className="primary-text bold"> Log in</span>
      </div>
    </div>
  );
}

export default SignUpScreen;
