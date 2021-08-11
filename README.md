
# Run Test

* Clone the repo
* cd into the directory
* Type `npm i` to install necessary dependencies
* Type `npm cypress open` to run test
* Click on the test in cypress window panel runs the test
* To generate test report type `npm run test`




# Task Two

Without writing any code briefly describe how you would approach testing the various parts of the site.


How to Test Frontend ReactJS App, Graphql, Elasticsearch and Database

# Frontend ReactJS 

  End to End(E2E) functional tests with cypress automated test tool.

# Test Graphql Query

Firstly, convert the GraphQL query into Stringified JSON format.
Secondly, pass the converted String as Body parameters to the Request.
Then finally, validate the response.

# Load testing Elasticsearch with Gatling

The test will allows you to easily test the indexes and record results, whilst throwing a large number of users at the cluster with relative ease.

# Database Test With Dbunit 


* Use One Database instance per user

Testing can be simplified if you can get your database in a known state before a test is run. A database should only be used for one test at a time; otherwise the database state cannot be guarantied.

So multiple developers working on the same project should have their own database instance to prevent data corruption. This also simplifies database cleanup, as you don't necessarily need needs to revert it to its initial state.

* Good setup no cleanup needed

You should always avoid creating tests that depends on results of preceding tests; thankfully this is the main purpose of DbUnit.

Don't be afraid to leave your trace after a test; principally if you are using one database instance per developer. If you always put your database in a known state before a test execution, you usually don't need to clean it up.. This simplifies your tests maintenance and reduces the overhead taken by the cleanup procedure. And sometimes, this is very helpful to manually verify the database state after executing a test that fails.

* Use multiple small datasets

Most of your tests do not require the entire database to be re-initialized. So, instead of putting your entire database data in one large dataset, try to break it into many smaller chunks.

These chunks could roughly corresponding to logical units, or components. This reduces the overhead caused by initializing your database for each test. This also facilitates team development since many developers working on different components can modify datasets independently.

For integrated testing, you can still use the CompositeDataSet class to logically combine multiple datasets into a large one at run time.


* Perform setup of stale data once for entire test class or test suite

If several tests are using the same read-only data, this data could be initialized once for an entire test class or test suite. You need to be cautious and ensure you never modify this data. This can reduce the time required to run your tests but also introduces more risk.
