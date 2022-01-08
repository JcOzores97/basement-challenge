import styles from '../styles/Cart.module.css';
import * as Popover from '@radix-ui/react-popover';
import Image from 'next/dist/client/image';
import { useContext } from 'react';
import { PurchaseContext } from '../context/purchase';
type ComponentProps = {
 };
 

const Cart = (props:ComponentProps)=>{
    const {state:{items , total}, actions:{updateItemQuantity, updateSelectedSize}} = useContext(PurchaseContext);
    return(
        
        <Popover.Root >
           <Popover.Trigger className={styles.trigger} >
                 {`CART (${items.length})`}
            </Popover.Trigger> 
            <Popover.Content className={styles.content} sideOffset={-52} alignOffset={-10}>
                <Popover.Close className={styles.closeButton}> 
                    <img src='./close.svg' alt='close icon'/>
                </Popover.Close >
                <div className={styles.title}>
                <h2>YOUR </h2>
                <h2>CART</h2>
                </div>
                <div className={styles.itemsContainer}>
                    {items.map((item)=>{
                        return(
                            <div key={item.id} className={styles.item}>
                                <div className={styles.imageContainer}>
                                    <Image src={item.imageSrc} alt={item.imageAltText} layout="responsive" width={880} height={1156}/>   
                                </div>
                                <div className={styles.infoContainer}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.descriptionName}>{item.descriptionName}</div>
                                    <div className={styles.quantity}>
                                        QUANTITY: 
                                        <div className={styles.quantityUpdate}>
                                            <button onClick={(ev)=>{updateItemQuantity(item.id,item.quantity - 1)}}>-</button>
                                            {item.quantity}
                                            <button onClick={(ev)=>{updateItemQuantity(item.id,item.quantity + 1)}}>+</button>
                                        </div>
                                    </div>
                                    <div className={styles.size}>SIZE: 
                                        {item.sizes.map((size)=>{
                                           return (
                                            <button className={size === item.selectedSize? styles.selectedSizeButton:styles.sizeButton}
                                                onClick={(ev)=> updateSelectedSize(item.id, size)}
                                                key={size} >
                                                {size}
                                            </button>
                                           ) 
                                        })}
                                    </div>
                                    <div className={styles.price}>{`$ ${item.priceInDollars}`}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.totalContainer}>
                    <div className={styles.total}>
                        <p>TOTAL</p>
                        <p> {`$ ${total}`}</p>
                    </div>
                    <button className={styles.checkout}>CHECKOUT</button>         
                </div>
            </Popover.Content>
        </Popover.Root>
      
    )
}

export default Cart;