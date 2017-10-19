({
    init: function(component, event, helper) {
        var action = component.get('c.getTodoItems');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.tasks', response.getReturnValue());
            } else if (state === 'INCOMPLETE') {
                alert('INCOMPLETE');
            } else if (state === 'ERROR') {
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
    },
    newItem: function(component, event, helper) {
        component.find('newItemModal').show();
    },
    createItem: function(component, event, helper) {
        var item = event.getParam('item');
        var tasks = component.get('v.tasks');
        tasks.push(item);
        component.set('v.tasks', tasks);

        var action = component.get('c.createTodoItem');
        action.setParams({ item: item });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
            } else if (state === 'INCOMPLETE') {
                alert('INCOMPLETE');
            } else if (state === 'ERROR') {
                alert('ERROR');
            }
        })
        $A.enqueueAction(action);
    },
    updateItem: function(component, event, helper) {
        var item = event.getParam('item');

        var action = component.get('c.updateTodoItem');
        action.setParams({ item: item });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
            } else if (state === 'INCOMPLETE') {
                alert('INCOMPLETE');
            } else if (state === 'ERROR') {
                alert('ERROR');
            }
        })
        $A.enqueueAction(action);
    }
})
