exports.definition = {
    config: {
        columns: {
            customerId: "integer AUTOINCREMENT",
            fname: "varchar",
            lname: "varchar",
            email: "varchar",
            password: "varchar",
            bizId: "integer",
            streetNumber: "varchar",
            streetName: "varchar",
            neighbourhood: "varchar",
            sublocality: "varchar",
            adminArealevel2: "varchar",
            adminArealevel1: "varchar",
            country: "varchar",
            postalCode: "varchar",
            isVerified: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "customers"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("customers", exports.definition, []);

collection = Alloy.C("customers", exports.definition, model);

exports.Model = model;

exports.Collection = collection;