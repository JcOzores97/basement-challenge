import styles from '../styles/Cart.module.css';
type ComponentProps = {
    onClose:( ev: React.MouseEvent<HTMLButtonElement>) => void
 };
 

const Cart= ({onClose}:ComponentProps)=>{

    return(
        <div className={styles.container}>
            <button onClick={onClose} className={styles.closeButton}>CLOSE</button>
            <h2>YOUR <span>CART</span></h2>
            <div className={styles.itemsContainer}>
            </div>
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
    )
}

export default Cart;