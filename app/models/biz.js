exports.definition = {
	config: {
		columns: {
		    "bizId": "integer AUTOINCREMENT",
		    "bizName": "varchar",
		    "properietorName": "varchar",
		    "phoneNumber": "varchar",
		    "password": "varchar",
		    "email": "varchar",
		    "logo": "blob",
		    "membershipPlan": "varchar",
		    "isVerified":"boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "biz"
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