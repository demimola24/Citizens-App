// var firebaseRef = new Firebase('https://burning-fire-1723.firebaseio.com');
// var wishRef = new Firebase('https://burning-fire-1723.firebaseio.com/WishList');
// var auth = new FirebaseSimpleLogin(firebaseRef, function (error, user) {
//     if (!error) {
//         if (user) {
//             App.load('LoginHome', user);
//         }
//     }
// });
App.controller('SignIn', function (page) {
    // put stuff here
    $(page)
        .find('#btnSignIn')
        .on('click',function () {
            var email = $('#btnUsername').val();
            var password = $('#btnPass').val();
	    if(email && password){
            App.load('LoginHome');
            // auth.login('password', {
            //     email: email,
            //     password: password
            // });
	    }
	     else{
			 App.dialog({
                    title: 'Validation Error',
                    text: 'Please enter username and password.',
                    okButton: 'Try Again',
                    cancelButton: 'Cancel'
                }, function (tryAgain) {
                    if (tryAgain) {
                        App.load('SignIn');
                    }
                });
	     }
        });
});



App.controller('SignUp', function (page) {
    // put stuff here

    $(page)
        .find('#btnSignUp')
        .on('click', function () {
            var email = $('#btnEmail').val();
            var password = $('#btnPassword').val();
	    if(email && password){
            App.load('LoginHome');
            // auth.createUser(email, password, function (error, user) {
            //     if (!error) {
            //         //App.load('LoginHome');
            //     }
            // });
            }
	    else{
		 App.dialog({
                    title: 'Validation Error',
                    text: 'Please enter username and password.',
                    okButton: 'Try Again',
                    cancelButton: 'Cancel'
                }, function (tryAgain) {
                    if (tryAgain) {
                        App.load('SignUp');
                    }
                });
	    }

        });

});






App.controller('LoginHome', function (page, user) {    
    $(page)
        .find('#btnLogout')
        .on('click', function () {            
            App.load('SignIn');
        });
});

try {
    App.restore();
} catch (err) {
    App.load('LoginHome');
}
