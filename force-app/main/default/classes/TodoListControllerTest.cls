@isTest
private with sharing class TodoListControllerTest {
    @isTest
    private static void getTodoItems_returnsItems() {
        dreamtodo__Todo_Item__c item = new dreamtodo__Todo_Item__c(Name = 'Test Item');
        insert item;

        Test.startTest();
        List<dreamtodo__Todo_Item__c> items = TodoListController.getTodoItems();
        Test.stopTest();

        System.assertEquals(1, items.size(), 'Expected a single item to be returned.');
        System.assertEquals(item.Id, items[0].Id, 'Expected the id to match.');
    }

    @isTest
    private static void createTodoItem_insertsItem() {
        Test.startTest();
        TodoListController.createTodoItem(new dreamtodo__Todo_Item__c(Name = 'Test Item'));
        Test.stopTest();

        List<dreamtodo__Todo_Item__c> items = [SELECT Id FROM dreamtodo__Todo_Item__c];
        System.assertEquals(1, items.size(), 'Expected a single item to be inserted.');
    }

    @isTest
    private static void updateTodoItem_updatesItem() {
        dreamtodo__Todo_Item__c item = new dreamtodo__Todo_Item__c(Name = 'Test Item');
        insert item;

        Test.startTest();
        item.dreamtodo__Is_Done__c = true;
        TodoListController.updateTodoItem(item);
        Test.stopTest();

        item = [SELECT dreamtodo__Is_Done__c FROM dreamtodo__Todo_Item__c WHERE Id = :item.Id];
        System.assertEquals(true, item.dreamtodo__Is_Done__c, 'Expected a item to be update.');
    }
}
