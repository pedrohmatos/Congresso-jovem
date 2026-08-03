import "./GoldenLink.css";

type Link = {
    children: string;
}

function GoldenLink({ children }: Link) {
    return (
        <a href="#">
            {children}
        </a>
    )
}

export default GoldenLink;