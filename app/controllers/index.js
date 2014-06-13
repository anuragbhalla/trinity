
var userTypes = Alloy.Collections.userTypes;
var biz = Alloy.Collections.biz;
var customers = Alloy.Collections.customers;
var customers = Alloy.Collections.customers;
var workItems = Alloy.Collections.workItems;
var workItems = Alloy.Collections.comments;

var userType = Alloy.createModel('userTypes', {
	userTypeId: '1',
	userType : 'biz'
});
userTypes.add(userType);
userType.save();

function showTask (event) { 
	var selectedTask = event.source;
	Ti.API.log("Here - " + selectedTask.userTypeId);
    var args = {
        userTypeId: selectedTask.userTypeId,
        userType: selectedTask.userType
    };
    var taskView = Alloy.createController("taskList", args).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(taskView);
    }
    if (OS_ANDROID) {
        taskView.open();
    }	
}


if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}
