
```bash
##########
# DEMO 1 #
##########

# Create a scratch org with the alias MyScratchOrg, and set it as the default
sfdx force:org:create -s -f config/project-scratch-def.json -a MyScratchOrg

# List authorized orgs, including the newly created scratch org
sfdx force:org:list

# Open the Dev Hub in the browser
sfdx force:org:open -u DevHub

# Open the scratch org in the browser
sfdx force:org:open

# Deploy code to the scratch org
sfdx force:source:push

# Assign a permission set to grant the scratch org user access to the app
sfdx force:user:permset:assign -n Dreamforce_Todo

# Import sample data into the scratch org
sfdx force:data:tree:import -f data/dreamtodo__Todo_Item__c.json

# Open the scratch org in the browser
sfdx force:org:open -p '/one/one.app#/n/dreamtodo__DreamforceTodo'

# Add the New button to TodoList.cmp

# Deploy the updated code to the scratch org
sfdx force:source:push

# Open the scratch org in the browser
sfdx force:org:open -p '/one/one.app#/n/dreamtodo__DreamforceTodo'

# Commit the changes to source control
git add .
git commit -m "Add new todo button"
git push origin master

# Check test results in Travis CI
# https://travis-ci.org/jeffhube/dreamforce-todo/builds

# Convert metadata for usage with the Metadata API
sfdx force:source:convert -d mdapi --packagename DreamforceTodo

# Deploy metadata to the packaging org
sfdx force:mdapi:deploy -d mdapi -u PackagingOrg -w 60

# Upload a new version of the package
sfdx force:package1:version:create --packageid 0331I000000l4j4 --name DreamforceTodo -u PackagingOrg -w 60

# Open the packaging org in the browser
sfdx force:org:open -u PackagingOrg -p '/one/one.app#/setup/Package/home'

##########
# DEMO 2 #
##########

# Run automated UI tests
gulp test
```