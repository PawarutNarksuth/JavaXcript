function lettersOnly(str) {
	let resalt = "";
	
	for(let i = 0 ;i < str.length ; i++){
		
		if(str.charAt(i) >= "a" && str.charAt(i) <= "z" || str.charAt(i) >="A" && str.charAt(i) <="Z"){
			resalt += str[i];
		}
	}
	return resalt;
}

console.log(lettersOnly("R!=:~0o0./c&}9k`60=y")) ;

console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")) ;

console.log(lettersOnly("^U)6$22>8p).")) ;