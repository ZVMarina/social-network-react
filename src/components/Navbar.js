function Navbar() {
    return (
        <nav className="navigation">
            <li className="navigation__item">
                <a className="navigation__link" href='/profile'>Profile</a>
            </li>
            <li className="navigation__item">
                <a className="navigation__link" href="/messages">Messages</a>
            </li>
            <li className="navigation__item">
                <a className="navigation__link">News</a>
            </li>
            <li className="navigation__item">
                <a className="navigation__link">Music</a>
            </li>
            <li className="navigation__item">
                <a className="navigation__link">Settings</a>
            </li>
        </nav>
    )
}

export default Navbar;