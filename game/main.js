var red = new Fighter({
	firstName: "Craig",
	nickName: "The Rock",
	lastName: "Munro",
	traits: {
		firstStrike: 100,
		flashKO: 50
	}
});

var blue = new Fighter();

var fight = new Fight({
	red: red,
	blue: blue,
	rounds: 5
});