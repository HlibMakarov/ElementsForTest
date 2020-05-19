
class ForSignUpDown {
// Locators For GitHub.com
    SignUP() {
        it('open url', () => {
           // array with input data
        let arr = ["EDTb2ZTMzgUg7Uaw", "8kTrZyFt4GGV4JSv", "2zhxdYYRGyeddLjK","x5kz87zdWXxxHa2r","8j6UhokMavn2w9Z2"];
        let email = ["Test1@gmail.com", "Test2@gmail.com", "Test3@gmail.com","Test4@gmail.com","Test5@gmail.com"];
        let password = ['9:)L"j/)Q$wT~<ie', 'n]%Yo:*a:-pu8S%', 'b}#2<WiGxT)GU;', '[J#~;Ek+^S*Rd$M8', 'FwoM<`y[~Z;{eK5K']

        const usernamefield = $('[id="user[login]-footer"]')
        const emailfield =  $('[id="user[email]-footer"]')
        const passfield =  $('[id="user[password]-footer"]')
        const signupbutton =  $('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]')
    
        for (let i = 0; i < arr.length; i++) {
            browser.setWindowSize(1920,1080)
            browser.url('https://github.com/')
            usernamefield.scrollIntoView()
            usernamefield.clearValue()
            usernamefield.addValue(arr[i])
            emailfield.clearValue()
            emailfield.addValue(email[i])
            passfield.clearValue()
            passfield.addValue(password[i])
        
            signupbutton.isExisting()
            signupbutton.click()
            browser.pause(000)
            }
        })
    }

    
 
}

module.exports = new ForSignUpDown()
