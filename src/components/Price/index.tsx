import styles from './Price.module.css';

type PriceType = {
    title: string;
    price: number;
};

function Price({ title, price }: PriceType) {
    return (
        <div>
            <h4 className={styles['style-title']}>{title}</h4>
            <div className={styles['style-description']}>
                <span className={styles['price-text']}>A partir de</span>
                <span className={styles.price}> R$ {price}</span>
            </div>
        </div>
    )
}

export default Price;