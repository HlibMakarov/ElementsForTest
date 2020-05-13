
class Auth {
    get $email() { return $('[id="login_field"]') }
    get $password () {return $('form div input[id="password"]')}
    get $signIn () {return $('[class="btn btn-primary btn-block"]')}
    get $errorMessages () {return $('[class="container-lg px-2"]')}

    login (email,$password){
        this.$email.setValue(email);
        this.$password.setValue($password);

        this.$signIn.click()

        //wait until
       browser.waitUntil(() => {
            const singInExist = this.$signIn.isExisting()
            const ErrorExist = this.$errorMessages.isExisting()
            return !singInExist || ErrorExist;
        }, 1000 , 'The sign in button is not gone and an error never appeared');
    }
}

module.exports = new Auth()