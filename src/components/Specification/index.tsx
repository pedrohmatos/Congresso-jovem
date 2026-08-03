import "./Specification.css";

type SpecificationType = {
    title: string;
    description: string;
}

function Specification({ title, description }: SpecificationType) {
    return (
        <div className='specification'>
            <span className='specification-title'>{title}</span>
            <span className='specification-description'>{description}</span>
        </div>
    )
}

export default Specification;