import './Price.css';

type PriceType = {
    title: string;
    price: number;
};

function Price({title, price}: PriceType) {
    return (
        <div>
            <h4 className='style-title'>{title}</h4>
            <div className='style-description'>
                <span className='price-text'>A partir de</span>
                <span className='price'> R$ {price}</span>
            </div>
        </div>
    )
}

export default Price;