import Airbnb from "../assets/images/Airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Airbnb} className="nav--logo" />
        </nav>
    )
}