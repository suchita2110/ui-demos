var index = 0;
var num= 0;
var userVal = +prompt("Enter the value");

	/* ***Print values 1 to 100 in incremental of 10*** */
	while(index<100){
		index = index+10;
		console.log(index);
	}

	console.log("---------------------------------");
	
	/* ***Print 2's table*** */
	while(num<=20){
		num = num+2;
		console.log(num);
	}
	
	console.log("---------------------------------");

	/* ***Match the points 60, and print steps from given number*** */
	do{
		console.log(userVal);
		userVal = userVal+1;
	} while(userVal<=60)