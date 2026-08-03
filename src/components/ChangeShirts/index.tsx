import "./ChangeShirts.css";

type ChangeShirtsType = {
    children: string;
}

function ChangeShirts({children}: ChangeShirtsType) {
    return (
        <button type="button" className="tshirt-caption">
            {children}
        </button>
    )
}

export default ChangeShirts;