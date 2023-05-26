import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    valueChageHandler: fnameChangedHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    valueChageHandler: lnameChangedHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChageHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (fnameInputHasError && lnameInputHasError && emailInputHasError) {
      return;
    }
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fnameInputClasses = fnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lnameInputClasses = lnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredFName}
            onChange={fnameChangedHandler}
            onBlur={fnameBlurHandler}
          />
          {fnameInputHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={fnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredLName}
            onChange={lnameChangedHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameInputHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must contains @</p>
        )}{" "}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
