class List{
    constructor(){
        this.list=[];
        this.size=0;
    }
    orderList = () => this.list.sort((a, b) => a - b)


    add(e){
        this.list.push(e);
        this.size++;
        this.orderList();
    }

    remove(i){
        if(i<0 || i>this.list.length-1){
            throw new Error("Invalid index")
        } else{
            this.list.splice(i,1);
            this.size--;
            this.orderList();
        }
    }

    get(i){
        if(i<0 || i>this.list.length-1){
            throw new Error("Invalid index")
        } else{
            return this.list[i];
        }
    } 
    }



    let myList = new List();
    myList.add(10);
    myList.add(3);
    myList.add(8);
    myList.add(1);
    console.log(myList.get(2)); // Output: 8
    myList.remove(0);
    console.log(myList.get(0)); // Output: 3