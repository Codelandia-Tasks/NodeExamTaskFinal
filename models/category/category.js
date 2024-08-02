class Category {
    constructor(datas){
        this.name = datas?.name;
    }

    static mapAll(rows){
        return rows.map(row => new Category(row));
    }

    static mapOne(row){
        return new Category(row);
    }
}

module.exports = Category;