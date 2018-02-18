// This is a JavaScript file
    function onDeviceReady() {
        var db = window.openDatabase("database", "1.0", "teamanddb", 10000000);
    }    
    
    function executeQuery(tx) {
        tx.executeSql('DROP TABLE IF EXISTS TestTable');
        tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (id unique, data)');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (1, "あいうえお")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (2, "かきくけこ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (3, "さしすせそ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (4, "たちつてと")');        
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (5, "なにぬねの")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (6, "はひふへほ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (7, "まみむめも")');

    }

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM TestTable', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results) {
        var len = results.rows.length;
        window.alert("There are " + len + " rows of records in the database.");
        for (var i=0; i<len; i++){
            document.writeln("row = " + i + " ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).data+"<br/>");
        }        
    }
    
    //Callback function when the transaction is failed.
    function errorCB(err) {
        console.log("Error occured while executing SQL: "+err.code);
    }

    // Callback function when the transaction is success.
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
        db.transaction(queryDB, errorCB);
    }
   
    function createDB(){
        var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
        db.transaction(executeQuery, errorCB, successCB);
 
    } 