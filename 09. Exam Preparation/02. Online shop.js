class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            const existingProductIndex = this.products.findIndex(p => p.hasOwnProperty(product));

            if (existingProductIndex !== -1) {
                // If the product already exists, update the quantity
                this.products[existingProductIndex][product] += quantity;
            } else {
                // If the product doesn't exist, add a new object to the array
                const newProduct = { [product]: quantity };
                this.products.push(newProduct);
            }

            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        }
    }

    quantityCheck(product, minimalQuantity) {
        const productEntry = this.products.find(p => p.hasOwnProperty(product));

        if (!productEntry) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        } else if (minimalQuantity <= productEntry[product]) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - productEntry[product];
            productEntry[product] = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product){
        const productEntry = this.products.find(p => p.hasOwnProperty(product));

        if (!productEntry) {
            throw new Error(`There is no ${product} in the warehouse.`);
        } else{
            productEntry[product]--;
            const newSale = { [product]: 1 };
            this.sales.push(newSale);
            return `The ${product} has been successfully sold.`
        }
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }

        const salesCount = this.sales.length;
        let result = `You sold ${salesCount} products today!\nProducts in the warehouse:\n`;

        for (const productEntry of this.products) {
            const product = Object.keys(productEntry)[0];
            const quantity = productEntry[product];
            result += `${product}-${quantity} more left\n`;
        }

        return result.trim(); // Remove trailing newline
    }


}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

