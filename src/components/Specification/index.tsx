import styles from './Specification.module.css';

type SpecificationType = {
    title: string;
    description: string;
}

function Specification({ title, description }: SpecificationType) {
    return (
        <div className={styles.specification}>
            <span className={styles['specification-title']}>{title}</span>
            <span className={styles['specification-description']}>{description}</span>
        </div>
    )
}

export default Specification;