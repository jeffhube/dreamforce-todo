public with sharing class TodoListController {
    @AuraEnabled
    public static List<SObject> getTodoItems() {
        return [SELECT Name, dreamtodo__Due_Date__c, dreamtodo__Is_Done__c FROM dreamtodo__Todo_Item__c ORDER BY Id];
    }

    @AuraEnabled
    public static void createTodoItem(dreamtodo__Todo_Item__c item) {
        insert item;
    }

    @AuraEnabled
    public static void updateTodoItem(dreamtodo__Todo_Item__c item) {
        update item;
    }
}
