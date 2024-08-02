class Product {
    constructor(rows){
        this.p_name = rows?.p_name;
        this.price = rows?.price;
        this.old_price = rows?.old_price;
        this.categoryid = rows?.categoryid;
        this.color = rows?.color;
        this.size = rows?.size;
    }

    static mapAll(rows) {
        return rows.map(row => new Product(row));
    }

    static mapOne(data) {
        return new Product(data);
    }
}

module.exports = Product;