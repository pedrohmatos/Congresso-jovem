import './SectionTitles.css';

type SectionTitlesType = {
    smallText: string;
    bigText: string;
};

function SectionTitles({ smallText, bigText }: SectionTitlesType) {
    return (
        <div>
            <div className='section-titles'>
                <p className='eyebrow'>{smallText}</p>
                <h2 className='section-h2 title'>{bigText}</h2>
            </div>
        </div>
    )
}

export default SectionTitles;