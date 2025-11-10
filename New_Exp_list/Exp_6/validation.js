function validateForm() {
    const name = document.forms[0]["name"].value;
    const phone = document.forms[0]["phone_number"].value;

    if (name.length < 6) {
        alert("Name must be at least 6 characters long.");
        return false;
    }

    if (phone.length <= 6) {
        alert("Phone number must be more than 6 characters.");
        return false;
    }

    return true;
}
