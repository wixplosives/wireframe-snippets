import { createBoard } from '@wixc3/react-board';
import './mega-menu.board.css';

export default createBoard({
    name: 'Mega Menu',
    Board: () => (
        <div className="navigationMegaMenu">
            <div className="navCategory">
                <div className="categoryTitle">Category</div>
                <div className="allMenuItems">
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="navCategory">
                <div className="categoryTitle">Category</div>
                <div className="allMenuItems">
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                    <a href="/" className="menuItem">
                        <img
                            src="https://static.wixstatic.com/shapes/27eba2_81a4aae870434124b16c503e6ed35e04.svg"
                            alt=""
                            className="iconContainer"
                        />
                        <div className="itemText">
                            Link one
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="navFeatured">
                <div className="categoryTitle">Featured</div>
                <div className="allMenuItems">
                    <a href="/" className="menuItem">
                        <div className="itemText">
                            Case Study
                            <p className="itemDescription">This is a description of this feature</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 852,
        windowWidth: 1124,
    },
});
