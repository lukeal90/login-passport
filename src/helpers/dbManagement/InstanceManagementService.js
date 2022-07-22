const MongoManagement = require('./MongoManagement');
const FirebaseManagement = require('./FirebaseManagement');

class InstanceManagementService {
    build(type) {
        switch (type) {
            case "FireBase":
                return new FirebaseManagement().instance();
            case "MongoDb":
                return new MongoManagement().instance();
            default: 
                return null;                        
        }
    }
}

module.exports = InstanceManagementService;