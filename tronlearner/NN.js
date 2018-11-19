class NeuralNetowrk {
	
	constructor(inputs, hiddenlayers){
		this.inputs = inputs;
		this.activationNodes = inputs;
		this.hiddenlayers = hiddenlayers;
		this.outputs = [];
		this.weights = [];
		this.activation = [];

		this.buildWeights();

	}

	sigmoid(n){
		return 1 / (1 + 2.718281 ** (-n));
	}

	buildWeights(){

		// this.weights.length = hiddenlayers + 1;
		// this.weights[0].length = activationNodes * inputs + 1;
		// this.weights[1].length = activationNodes * inputs + 1;

		for(var i = 0; i < this.hiddenlayers + 1; i++){
			this.weights.push([]);
			for(var j = 0; j < this.activationNodes; j++){
				this.weights[i].push([]);
				for(var k = 0; k < this.inputs + 1; k++){
					//this works?
					this.weights[i][j].push(-1000);
				}
			}
		}
		
	}

	MatrixMul(one, two){

		var activation = [];
		//bias per activation
		activation.push(1);
		var total;


		for(var i = 0; i < one.length; i++){

			total = 0;

			for(var j = 0; j < one[i].length; j++){
				total += one[i][j] * two[j];
			}

			activation.push(this.sigmoid(total));
		}


		return activation;
	}

	forwardPropagation(_in) {
		this.activation = [];

		this.activation.push(this.MatrixMul(this.weights[0], this.addBias(_in)));

		console.log(this.activation);

		for(var i = 1; i < this.hiddenlayers; i++){
			this.activation.push(this.MatrixMul(this.weights[i], this.activation[i-1]));
		}

		this.outputs = this.MatrixMul(this.weights[this.weights.length - 1], this.activation[this.activation.length - 1]);

		return this.outputs;
	}

	addBias(array){

		var aux = [];
		aux.push(1);

		for(var i = 0; i < array.length; i++){
			aux.push(array[i]);
		}

		return aux;
	}

	

}


nn = new NeuralNetowrk(3,1);

console.log(nn.forwardPropagation([1, 1, 1]));

/*/
	input = [3,2]

	weights = 
	[[0,0,0]
	[0,0,0]
	[0,0,0]
	[0,0,0]]
/*/