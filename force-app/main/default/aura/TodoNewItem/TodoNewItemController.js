({
    save: function(component, event, helper) {
        helper.hide(component);

        var evt = component.getEvent('onsave');
        evt.setParam('item', component.get('v.item'));
        evt.fire();
    },
    cancel: function(component, event, helper) {
        helper.hide(component);
    },
    show: function(component, event, helper) {
        component.set('v.item', { 'sobjectType': 'dreamtodo__Todo_Item__c' });
        helper.show(component);
    }
})
