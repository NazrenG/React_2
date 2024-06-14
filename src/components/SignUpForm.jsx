import stlyles from "./UI/Authorization.module.css";

const SignUp = () => {
  return (
    <div className={stlyles.signDiv}>
      <h3> SignUp</h3>
      <input className={stlyles.signInput} type="text" placeholder=" Name" />
      <input className={stlyles.signInput} type="text" placeholder=" Email" />
      <input
        className={stlyles.signInput}
        type="text"
        placeholder=" Password"
      />
      <div className={stlyles.signRadioBtn}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <label>
        <input type="checkbox" />
        Terms and Conditions
      </label>
    </div>
  );
};
export default SignUp;
