
var username = "Denis";

var password = 12345678;


const denis = {
    name: 'Denis King',
    work: 'Web Developer',
    userInfo: function checkInfo() {
        if(username !== "Denis") {
            alert('Incorrect username.');
        } if(password !== 12345678) {
            alert('Incorrect password')
        }
        return prompt('Forgot password?');
    }
}

checkInfo();
