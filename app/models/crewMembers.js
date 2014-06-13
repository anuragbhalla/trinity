exports.definition = {
	config: {
		columns: {
		    "crewMemberId": "integer",
		    "Name": "varchar",
		    "phoneNumber": "varchar",
		    "password": "varchar",
		    "bizId": "integer",
		    "email": "varchar",
		    "isVerified": "boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "crewMembers"
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