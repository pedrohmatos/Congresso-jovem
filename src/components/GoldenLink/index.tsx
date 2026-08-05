import styles from './GoldenLink.module.css';

type Link = {
    children: string;
    hrefText: string;
    outside: boolean;
}

function GoldenLink({ children, hrefText, outside }: Link) {
    return (
        <a href={hrefText} target={`${outside ? '_blank' : '_self'}`} className={styles.goldenLink}>
            {children}
        </a>
    )
}

export default GoldenLink;