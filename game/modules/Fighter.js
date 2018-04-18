function Fighter(args) {
	
	var args = args || {};

	this.firstName = args.firstName || "Barry";
	this.nickName = args.nickName || "Boshbags";
	this.lastName = args.lastName || "Bushinski";
	
	this.strength = args.strength || 50;
	this.speed = args.speed || 50;
	this.stamina = args.stamina || 50;
	
	this.gym = args.gym || false;
	
	this.health = args.health || 100;
	
	this.traits = args.traits || {
		firstStrike: 50,
		flashKO: 50
	};

};