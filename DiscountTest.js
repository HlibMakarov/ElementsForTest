
class Discount {

    verify() {
        it('test data', () => {
            const assert = require("assert");
            const InputNext = $ ('[type="text"][name="q"]')
            const Updatebutton =  $('[value="Update"]')
            const dicontverifyfield = $ ('/html/body/center/table/tbody/tr[6]/td/table/tbody/tr[2]/td[5]/p/b')
    
            let arr = ['20',	'21',	'22',	'23',	'24',	'25',	'26',	'27',	'28',	'29',	'30',	'31',	'32',	'33',	'34',	'35',	'36',	'37',	'38',	'39',	'40',	'41',	'42',	'43',	'44',	'45',	'46',	'47',	'48',	'49']
    
            for (let i = 0; i < arr.length; i++) {
           
            // InputNext.doubleClick()
            InputNext.clearValue();
            InputNext.addValue(arr[i])
            Updatebutton.click();
            assert.strictEqual(dicontverifyfield.getText(),'2');
            }
        })
}
}

module.exports = new Discount()
