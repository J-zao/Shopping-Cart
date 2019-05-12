class CartItem {
    constructor(id, name, price, tax){
        this.id = id;
        this.name = name;
        this.price = price;
        this.tax = tax;
        this.qty = 1;

        this.calculatePrice();
    }

    add() {
       this.qty++; 
       this.calculatePrice();
    }

    calculatePrice() {
        const sp = (this.tax * this.price) + this.price;
        this.priceTotal = (sp *  this.qty).toFixed(2);       
    }
    
    //TODO: clean up, qty update, total price
}

export default CartItem;