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
                    <a href="/" className="featuredItem">
                        <img
                            src="https://static.wixstatic.com/media/27eba2_d68cbca76a1f41b0819f880581b5d3f6~mv2.png/v1/fill/w_360,h_360/27eba2_d68cbca76a1f41b0819f880581b5d3f6~mv2.png"
                            className="featuredImg"
                        />
                    </a>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 435,
        windowWidth: 1132,
    },
});
