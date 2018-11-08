# BootsTrapEx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Example

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Kodinger">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>My Login Page</title>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/my-login.css">
</head>

<body class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src="img/logo.jpg" alt="logo">
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">Login</h4>
							<form method="POST" class="my-login-validation" novalidate="">
								<div class="form-group">
									<label for="email">E-Mail Address</label>
									<input id="email" type="email" class="form-control" name="email" value="" required autofocus>
									<div class="invalid-feedback">
										Email is invalid
									</div>
								</div>

    							<div class="form-group">
    								<label for="password">Password
    									<a href="forgot.html" class="float-right">
    										Forgot Password?
    									</a>
    								</label>
    								<input id="password" type="password" class="form-control" name="password" required data-eye>
    							    <div class="invalid-feedback">
    							    	Password is required
    						    	</div>
    							</div>

    							<div class="form-group">
    								<div class="custom-checkbox custom-control">
    									<input type="checkbox" name="remember" id="remember" class="custom-control-input">
    									<label for="remember" class="custom-control-label">Remeber Me</label>
    								</div>
    							</div>

    							<div class="form-group m-0">
    								<button type="submit" class="btn btn-primary btn-block">
    									Login
    								</button>
    							</div>
    							<div class="mt-4 text-center">
    								Don't have an account? <a href="register.html">Create One</a>
    							</div>
    						</form>
    					</div>
    				</div>
    				<div class="footer">
    					Copyright &copy; 2017 &mdash; Your Company
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <script src="js/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/my-login.js"></script>

</body>
</html>

## CSS

html,body {
height: 100%;
}

body.my-login-page {
background-color: #f7f9fb;
font-size: 14px;
}

.my-login-page .brand {
width: 90px;
height: 90px;
overflow: hidden;
border-radius: 50%;
margin: 0 auto;
margin: 40px auto;
box-shadow: 0 4px 8px rgba(0,0,0,.05);
position: relative;
z-index: 1;
}

.my-login-page .brand img {
width: 100%;
}

.my-login-page .card-wrapper {
width: 400px;
}

.my-login-page .card {
border-color: transparent;
box-shadow: 0 4px 8px rgba(0,0,0,.05);
}

.my-login-page .card.fat {
padding: 10px;
}

.my-login-page .card .card-title {
margin-bottom: 30px;
}

.my-login-page .form-control {
border-width: 2.3px;
}

.my-login-page .form-group label {
width: 100%;
}

.my-login-page .btn.btn-block {
padding: 12px 10px;
}

.my-login-page .footer {
margin: 40px 0;
color: #888;
text-align: center;
}

@media screen and (max-width: 425px) {
.my-login-page .card-wrapper {
width: 90%;
margin: 0 auto;
}
}

@media screen and (max-width: 320px) {
.my-login-page .card.fat {
padding: 0;
}

    .my-login-page .card.fat .card-body {
    	padding: 15px;
    }

}
