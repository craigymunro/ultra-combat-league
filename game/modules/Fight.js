function Fight(args) {
	
	var args = args || {};
	
	this.red = args.red;
	this.blue = args.blue;

	this.rounds = args.rounds || 3;
	this.fighting = true;
	
	this.round = function(n) {
	
		this.exchanges = 10;
		
		console.log("Round " + n + "!");
		
		for(exchange = 1; exchange <= this.exchanges; exchange++) {
			
			// Who lands the first exchange?
			if(exchange == 1) {
				if(this.red.traits.firstStrike > this.blue.traits.firstStrike) {
					this.strike(this.red, this.blue);
				} else {
					this.strike(this.blue, this.red);
				}
			} else {
				if(Util.coinFlip()) {
					this.strike(this.red, this.blue);
				} else {
					this.strike(this.blue, this.red);
				}
			}
			
			if(this.red.health <= 0 || this.blue.health <= 0) {
				this.fightEnd(this.red.health > 0 ? this.red : this.blue);
				break;
			}
		}
	};
	
	this.strike = function(red, blue) {
		console.log("Exchange! Strike landed by " + red.nickName + "!");
		damage = Util.random(1,10);
		blue.health -= damage;
		console.log(red.nickName + " health: " + red.health);
		console.log(blue.nickName + " health: " + blue.health);
	};
	
	this.fight = function() {
		for(round = 1; round <= this.rounds; round++) {
			if(this.fighting == true) {
				this.round(round);
			} else {
				break;
			}
		}
	}
	
	this.fightEnd = function(winner) {
		this.fighting = false;		
		console.log("The winner is " + winner.nickName);
		
	}

	this.fight();

};