class Person{
	constructor(fullname,favColor){
		this.name = fullname;
		this.favoriteColor = favColor;	
	}
	greet(){
		console.log('Hello there my name is '+ this.name);
	}
}

export default Person;