function Navbar(props) {
    console.log("props => ", props.test)

    const Navbar = ({navMenu}) => {}
    return (
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "https://instagram.com/faateehrzl__?igshid=YmMyMTA2M2Y=">Contact</a>
                </li>
                <li>
                    <a href = "https://hendroagungs.blogspot.com/2020/10/materi-kuliah-pemrograman-web-lanjut.html">{props.navText}</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;