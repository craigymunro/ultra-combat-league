class Util {

	static coinFlip() {
		return Math.floor(Math.random() * 2);
	};

	static random(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	};
	
}