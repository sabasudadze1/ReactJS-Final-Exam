import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'String of Hearts', desc: "Ceropegia is a genus of plants within the family Apocynaceae, native to Africa, southern Asia, and Australia", price:14,img:Item1},
        {id:2,title:'Prince of Orange', desc: "Prince of Orange is a title originally associated with the sovereign Principality of Orange, in what is now southern France", price:21,img: Item2},
        {id:3,title:'Silver Dragon', desc: "Silver Dragon is a very compact variety suitable for terrariums.",price:10,img: Item3},
        {id:4,title:'Hastatum SIlver', desc: "Philodendron hastatum is a species of plant in the genus Philodendron", price:8,img:Item4},
        {id:5,title:'String of Pearls', desc: "Curio rowleyanus, syn. Senecio rowleyanus, is a flowering plant in the daisy family Asteraceae. It is a creeping, perennial, succulent vine native to the drier parts of southwest Africa.", price:30,img: Item5},
        {id:6,title:'Dragon Scale', desc: "Although Alocasia Baginda needs frequent watering, over or under-watering is an issue. In the summer, it is recommended to water two or three times per week",price:18,img: Item6}
        
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //HOME კომპონენტის შიგნით 
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //ვამოწმებთ action id თუ არსებობს addedItems-ში
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            
            //გამოვთვლით ჯამურს 
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
            //გამოვთვლით ჯამურს 
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //Cart კომპონენტის შიგნით 
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //თუ qt == 0 , მაშინ წავშლით მას 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
