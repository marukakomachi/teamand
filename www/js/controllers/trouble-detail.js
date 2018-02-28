app.controller('TroubleDetailController', 
    [
        '$scope', 
        'MyDBService', 
        'AnswerData', 
        function($scope, MyDBService, AnswerData) {

    var target = AnswerData.get();

    loadData();

    // データ読込処理
    function loadData() {
        // 悩みからの食知見を取得
        MyDBService.connect().then(
            function(db) {
                console.log("GET ALL KNOWLEDGE : " + target.col_name);
                var mainTable = new TroubleCls(target.col_id);
                var subTable = new FoodItemCls();
                var relationTable = new RelationTroFItemCls();
                return MyDBService.getAllKnowledge(db, mainTable, subTable, relationTable);
            }
        ).then(
            function(resultList) {
                // 検索結果を画面に設定する（１件のはず）
                $scope.data = resultList[0];
                $scope.data.tagList = [];
                
                //console.log("DATA : " + JSON.stringify($scope.data));
                
                var tagInfos = $scope.data.tags.split(",");
                tagInfos.forEach(function(tagInfo){
                    var t = tagInfo.split(":");
                    $scope.data.tagList.push({col_id: t[0], col_name: t[1]});
                });
            }
        );      
    };
    
    // レシピ詳細ページへの遷移 
    $scope.showRecipeDetailPage = function(recipe_data) {
        AnswerData.set(recipe_data);
        myNavigator.pushPage('recipe-detail.html');
    }

    // ダイアログ
    $scope.showDialog = function(dlg) {
      ons.createDialog(dlg, {parentScope: $scope}).then(function(dialog) {
              
        dialog.on("preshow", function(e) {
          document.getElementById('food-item').textContent = $scope.data.tagList[0].col_name;
          document.getElementById('food-effect').textContent = $scope.data.effect;
        })
          
        dialog.on("posthide", function(e) {
          e.dialog.destroy();
        }); 
              
         dialog.show();
      });
    };
        
}]);