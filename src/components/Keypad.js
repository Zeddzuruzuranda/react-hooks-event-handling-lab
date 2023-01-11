// Code Keypad Component Here

function Keypad() {
    function PasswordChange() {
        console.log("Entering Password...");
    }
    return (
        <input type="password" onChange={PasswordChange} />
    )
}

export default Keypad;