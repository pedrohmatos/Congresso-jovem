import styles from './SectionTitles.module.css';

type SectionTitlesType = {
    smallText: string;
    bigText: string;
};

function SectionTitles({ smallText, bigText }: SectionTitlesType) {
    return (
        <div>
            <div className={styles['section-titles']}>
                <p className={styles.eyebrow}>{smallText}</p>
                <h2 className={styles['section-h2']}>{bigText}</h2>
            </div>
        </div>
    )
}

export default SectionTitles;