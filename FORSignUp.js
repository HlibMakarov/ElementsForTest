
class ForSignUpDown {

    SignUP() {
        it('open url', () => {
           // array with input data
        let arr = ["EDTb2ZTMzgUg7Uaw", "8kTrZyFt4GGV4JSv", "2zhxdYYRGyeddLjK","x5kz87zdWXxxHa2r","8j6UhokMavn2w9Z2"];
        let email = ["Test1@gmail.com", "Test2@gmail.com", "Test3@gmail.com","Test4@gmail.com","Test5@gmail.com"];
        let password = ['9:)L"j/)Q$wT~<ie', 'n]%Yo:*a:-pu8S%', 'b}#2<WiGxT)GU;', '[J#~;Ek+^S*Rd$M8', 'FwoM<`y[~Z;{eK5K']
    
        for (let i = 0; i < arr.length; i++) {
            browser.setWindowSize(1920,1080)
            browser.url('https://github.com/')
            $('[id="user[login]-footer"]').scrollIntoView()
            $('[id="user[login]-footer"]').clearValue()
            $('[id="user[login]-footer"]').addValue(arr[i])
            $('[id="user[email]-footer"]').clearValue()
            $('[id="user[email]-footer"]').addValue(email[i])
            $('[id="user[password]-footer"]').clearValue()
            $('[id="user[password]-footer"]').addValue(password[i])
        
            //$('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]').click()
            browser.pause(2000)
            }
        })
    }

    
 
}

module.exports = new ForSignUpDown()