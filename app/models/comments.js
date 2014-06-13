exports.definition = {
	config: {
		columns: {
		    "commentId": "integer",
		    "commentText": "varchar",
		    "picture": "blob",
		    "workItemId": "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "comments"
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