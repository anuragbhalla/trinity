exports.definition = {
	config: {
		columns: {
		    "customerId": "integer AUTOINCREMENT",
		    "fname": "varchar",
		    "lname": "varchar",
		    "email": "varchar",
		    "password": "varchar",
		    "bizId": "integer",
		    "streetNumber": "varchar",
		    "streetName": "varchar",
		    "neighbourhood": "varchar",
		    "sublocality": "varchar",
		    "adminArealevel2": "varchar",
		    "adminArealevel1": "varchar",
		    "country": "varchar",
		    "postalCode": "varchar",
		    "isVerified":"boolean"
		    
		},
		adapter: {
			type: "sql",
			collection_name: "customers"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};