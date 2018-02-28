// テーブル：悩み-食アイテムリレーション
var RelationTroFItemCls = (function () {
    // コンストラクタ
    function RelationTroFItemCls(id, fitem_id, trouble_id) {
        // 親クラスのコンストラクタ呼び出し
        BaseTableCls.call(this, "relation_tro_fitem", id);

        // カラム
        this.col_trouble_id = trouble_id;
        this.col_fitem_id= fitem_id;
    }

    // configure prototype
    RelationTroFItemCls.prototype = new BaseTableCls();
    RelationTroFItemCls.prototype.constructor = RelationTroFItemCls;

    return RelationTroFItemCls; // return constructor
})();