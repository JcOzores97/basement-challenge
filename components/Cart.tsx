import styles from '../styles/Cart.module.css';
import * as Popover from '@radix-ui/react-popover';
import { useContext } from 'react';
import { PurchaseContext } from '../context/purchase';
type ComponentProps = {
 };
 

const Cart = (props:ComponentProps)=>{
    const {state:{items}} = useContext(PurchaseContext);

    return(
        
        <Popover.Root >
           <Popover.Trigger className={styles.trigger} >
                 CART ({items.length})
            </Popover.Trigger> 
            <Popover.Content className={styles.content} sideOffset={-52} alignOffset={-10}>
                <Popover.Close className={styles.closeButton}> 
                    Close
                </Popover.Close >
                <h2>YOUR <span>CART</span></h2>
                <div className={styles.itemsContainer}>
                </div>
                <div className={styles.totalContainer}>
                    <div className={styles.total}>
                        <p>
                            TOTAL
                        </p>
                        <p>
                            $37,50 
                        </p>
                    </div>
                    <button className={styles.checkout}>CHECKOUT</button>         
                </div>
            </Popover.Content>
        </Popover.Root>
      
    )
}

export default Cart;