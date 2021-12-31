import * as React from 'react';
import { Product } from '../product/types';


type Item = Product & {quantity: number};

type PurchaseProviderProps = {children: React.ReactNode}

interface PurchaseContextInterface {
  state:{
    items: Item[]
  },
  actions:{
    addItem:(product: Product) => void,
    removeItem:(id:number) => void
  }
}

const PurchaseContext = React.createContext<PurchaseContextInterface >({} as PurchaseContextInterface);


const PurchaseProvider = ({ children }:PurchaseProviderProps) => {

  const [items, setItems] = React.useState<Item[]>([]);


  function addItem(product: Product){ 
    const item =  items.find((item)=> item.id === product.id);

    if(item){
      //aumentar en uno la cantidad
      const newItems = items.map((i)=>{
        if(i.id === item.id){
          return {...item, quantity: item.quantity + 1}
        }
        return i;
      })

      setItems(newItems);
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

  const state={ items:[]}
  const actions = {addItem, removeItem}

  React.useEffect(()=>{
    console.log(items)
  },[items])


    return <PurchaseContext.Provider value={{ state, actions }}>{children}</PurchaseContext.Provider>;
};
  
  export { PurchaseProvider, PurchaseContext};

