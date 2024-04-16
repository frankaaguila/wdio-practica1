class CartSidebar {

    get component(){
        return $('.w-commerce-commercecartcontainerwrapper--cartType-rightSidebar');
    }

    get headerText(){
        return $('.w-commerce-commercecartheading');
    }

    get btnClose(){
        return $('.w-commerce-commercecartcloselink');
    }

    get subtotal(){
        return $('.w-commerce-commercecartordervalue');
    }
}

export default new CartSidebar();