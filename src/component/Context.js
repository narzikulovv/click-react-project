import React, {createContext, Component } from 'react'

export const DataContext = createContext()

export class DataProvider extends Component { 

    state = {
        products: [
            {
                "_id": 1,
                title: "Brown clock",
                image: "/images/clock.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],
                price: 25,
                count: 1
            },
            {
                "_id": 2,
                title: "Grey clock",
                image: "/images/image-3.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],
                price: 15,
                count: 1
            },
            {
                "_id": 3,
                title: "Pink clock",
                image: "/images/image-9.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],
                price: 25,
                count: 1
            },
            {
                "_id": 4,
                title: "Black clock",
                image: "/images/image-4.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],
                price: 45,
                count: 1
            },
            {
                "_id": 5,
                title: "Black clock",
                image: "/images/image-10.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],
                price: 20,
                count: 1
            },
            {
                "_id": 6,
                title: "Red clcok",
                image: "/images/image-11.png",
                discription: " Lorem ipsum dolor sit amet",
                color: ['blueviolet', 'brown', 'grey', 'gainsboro'],    
                price: 30,
                count: 1
            }

        ],
        cart: [],
        total: 0
    }

    addCart = (id) => {
        const {products, cart} = this.state
        const check = cart.every(item => {
            return item._id !== id
        })

        if (check){
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
       
    }

    reduction = (id) => {
         const {cart} = this.state
         cart.forEach(item => {
             if (item._id === id){
                 item.count === 1 ? item.count = 1 : item.count -= 1
             }
         })
         this.setState({cart: cart})
         this.getTotal()
    }

    increase = (id) => {
        const {cart} = this.state
        cart.forEach(item => {
            if (item._id === id){
                item.count += 1
            }
        })
        this.setState({cart: cart})
        this.getTotal()
    }

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    }

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        if (dataCart !== null){
            this.setState({cart: dataCart}) 
        }
        const dataTotal = JSON.parse(localStorage.getItem("dataTotal"))
        if (dataTotal !== null){
            this.setState({total: dataTotal}) 
        }
    }

    removeProduct = (id) => {
        if (window.confirm("Do you want to delete this product?")){
            const {cart} = this.state
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart})
            this.getTotal()
        }
    }

    getTotal = () => {
        const {cart} = this.state
        const res = cart.reduce((prev, item) => {
            return prev + (item.count * item.price)
            
        }, 0)
        this.setState({total: res})
        // console.log("item", item);
    }


    render() {
        const {products, cart, total} = this.state
        const {addCart, reduction, increase, removeProduct, getTotal} = this 

        return (
           <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
               {this.props.children}
           </DataContext.Provider>
        )
    }
}
