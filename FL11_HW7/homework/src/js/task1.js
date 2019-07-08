let email = prompt('Write your email.','email@gmail.com');
let password = '';
let userPassword = 'UserPass';
let adminPassword = 'AdminPass';
let access = false;
let minLengthEmail = 6;
if (email === '' || email === null ) {
    alert('Canceled.');
} else if(email.length < minLengthEmail) {    
        alert('I don’t know any emails having name length less than 6 symbols')
} else {
    if (email === 'user@gmail.com' || email === 'admin@gmail.com' ) {
        password = prompt('Enter your password','');
        if (password === '' || password === null) {
        alert('Canceled.');
        } else {
            if ( email === 'user@gmail.com' && password === userPassword || 
            email === 'admin@gmail.com' && password === adminPassword ){
                if (confirm('Do you want to change your password?')) {
                    let tempPassword = prompt('Enter your old password.', '');
                    if (tempPassword === '' || tempPassword === null) {
                        alert('Canceled.');
                    } else {
                        if( tempPassword === password) {
                            tempPassword = prompt('Enter your new password','');
                            console.log(tempPassword);
                            const minLengthPassword = 5;                                                        
                            if (tempPassword.length < minLengthPassword) {
                                alert('It’s too short password. Sorry.');
                            } else { 
                                if (tempPassword !== prompt('Enter password again.', '')) {
                                    alert('You wrote the wrong password.');
                                } else {
                                    password = tempPassword;
                                    alert('You have successfully changed your password.');
                                }                                
                            }
                        } else {
                            alert('Canceled.');
                        }
                    }
                } else {
                    alert('You have failed the change.');
                }
            } else {
               alert('Wrong password');
            }
        }   
    } else {
            alert('I don’t know you');
    }
}