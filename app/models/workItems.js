exports.definition = {
	config: {
		columns: {
		    "workItemId": "integer AUTOINCREMENT",
		    "title": "varchar",
		    "initiationDate": "datetime",
		    "isComplete": "boolean",
		    "customerId": "integer",
		    "bizId":"integer"
		},
		adapter: {
			type: "sql",
			collection_name: "workItems"
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