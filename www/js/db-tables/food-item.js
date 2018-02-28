// テーブル：悩み
var FoodItemCls = (function () {
    // コンストラクタ
    function FoodItemCls(id, name, knowledge, effect, imgPath, fullimgPath) {
        // 親クラスのコンストラクタ呼び出し
        BaseTableCls.call(this, "fitem", id);

        // カラム
        this.col_name = name;
        this.col_knowledge = knowledge;
        this.col_effect = effect;
        this.col_imgPath = imgPath;
        this.col_fullimgPath = fullimgPath;
    }

    // configure prototype
    FoodItemCls.prototype = new BaseTableCls();
    FoodItemCls.prototype.constructor = FoodItemCls;

    return FoodItemCls; // return constructor
})();