module.exports = function (data, callback) {
		var sum = 0;
		try{
			obj = JSON.parse(data);
			sum =  (obj.num1) + (obj.num2);
		}
		catch(ex){
			console.log(ex);
			sum = '[ERROR]';
		}

    callback(null,sum);
};
