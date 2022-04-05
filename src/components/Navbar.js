import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navigation navigation_type_menu">
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/profile">Profile</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/dialogs">Messages</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/news" >News</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/music">Music</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/settings">Settings</NavLink>
                </li>

                <li className="navigation__item navigation__item_type_ftiends">
                    <NavLink className="navigation__link navigation__link_type_ftiends" to="/friends/all">
                        Friends
                    </NavLink>
                    <div className="navigation__friends-container">
                        <NavLink className="navigation__link navigation__link_type_ftiends" to="/friends/1">
                            <div className="navigation__avatar-container">
                                <img className="navigation__avatar" src="https://www.meme-arsenal.com/memes/bd177bfc667baaf68407cce161b2959a.jpg" alt="Geralt" />
                            </div>
                        </NavLink>
                        <NavLink className="navigation__link navigation__link_type_ftiends" to="/friends/2">
                            <div className="navigation__avatar-container">
                                <img className="navigation__avatar" src="https://www.meme-arsenal.com/memes/bd177bfc667baaf68407cce161b2959a.jpg" alt="Geralt" />
                                {/* <figcaption className="navigation__avatar-name" >Geralt</figcaption> */}
                            </div>
                        </NavLink>
                        <NavLink className="navigation__link navigation__link_type_ftiends" to="/friends/3">
                            <div className="navigation__avatar-container">
                                <img className="navigation__avatar" src="https://www.meme-arsenal.com/memes/bd177bfc667baaf68407cce161b2959a.jpg" alt="Geralt" />
                                {/* <figcaption className="navigation__avatar-name" >Geralt</figcaption> */}
                            </div>
                        </NavLink>
                    </div>
                </li>
            </nav>
            {/* <nav className="navigation navigation_type_ftiends">
                <li className="navigation__item navigation__item_type_ftiends">
                    <NavLink className="navigation__link navigation__link_type_ftiends" to="/friends">
                        <p>Friends</p>
                        <figure>
                            <img src="/macaque.jpg" alt="Макака на дереве" />
                            <figcaption>Нахальная макака. Река Нижняя Кинтаганбан, Борнео.
                                Источник: <a href="http://www.flickr.com/photos/rclark/">Ричард Кларк</a></figcaption>
                        </figure>

                    </NavLink>
                </li>
            </nav> */}
        </>
    )
}

export default Navbar;