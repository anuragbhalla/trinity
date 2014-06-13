exports.definition = {
	config: {
		columns: {
		    "userTypeId": "INTEGER",
		    "userType": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "userTypes",
			idAttribute: "userTypeId"
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