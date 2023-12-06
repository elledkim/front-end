// LoginForm component that takes onSubmit as a prop (We will discuss below.)
function LoginForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        // Gets the value in the name field.
        const name = event.target.name.value;
        // Passes the name to the parent component
        props.onSubmit(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name="name" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;