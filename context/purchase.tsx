import * as React from 'react';
import { Product } from '../product/types';


type Item = Product & {quantity: number};

type PurchaseProviderProps = {children: React.ReactNode}

interface PurchaseContextInterface {
  state:{
    items: Item[],
    total: number
  },
  actions:{
    addItem:(product: Product) => void,
    removeItem:(id:number) => void,
    updateItemQuantity: (id:number, newQuantity: number) => void
  }
}

const PurchaseContext = React.createContext<PurchaseContextInterface >({} as PurchaseContextInterface);




const PurchaseProvider = ({ children }:PurchaseProviderProps) => {

  const [items, setItems] = React.useState<Item[]>([]);
  const total = getTotal(items);

  function getTotal(items: Item[]){
    return items.reduce((acc, currItem)=> acc + (currItem.priceInDollars * currItem.quantity),0);
  }

  function addItem(product: Product){ 
    const item =  items.find((item)=> item.id === product.id);

    if(item){
      //aumentar en uno la cantidad
      updateItemQuantity(item.id, item.quantity + 1);
    }else{
      //añadir el nuevo item
      const newItem = {...product, quantity:1}
      setItems([...items, newItem]);
    }
  }
  function removeItem(id:number){
    const newItems= items.filter((item)=>{item.id === id});  
    setItems(newItems);
  }

  function updateItemQuantity(id: number,newQuantity:number){
      if(newQuantity <= 0){
        return
      }
      const newItems= items.map((item)=>{
        if(item.id === id){
          item.quantity = newQuantity;
        }
        return item;
      });
      setItems(newItems);
  }

  const state={items, total}
  const actions = {addItem, removeItem , updateItemQuantity}

    return <PurchaseContext.Provider value={{ state, actions }}>{children}</PurchaseContext.Provider>;
};
  
  export { PurchaseProvider, PurchaseContext};

