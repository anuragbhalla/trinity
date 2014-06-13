exports.definition = {
	config: {
		columns: {
		    "appInviteId": "integer",
		    "fromBizId": "integer",
		    "toPhoneNumber": "varchar",
		    "toEmail": "varchar",
		    "inviteForUserType": "varchar"
		},
		adapter: {
			type: "sql",
			collection_name: "appInvites"
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