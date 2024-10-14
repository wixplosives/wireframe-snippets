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
                <a className="featuredItem">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1670174693145-e4c5179ce1d0?q=80&amp;w=1964&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="featuredImg"
                    />
                    <div className="featuredText">
                        Article about AI
                        <p className="itemDescription">Read more</p>
                    </div>
                </a>
                <a className="featuredItem">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1670530034951-b7d0428d6c9c?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
                        className="featuredImg"
                    />
                    <div className="featuredText">
                        Article about This<p className="itemDescription">Read more</p>
                    </div>
                </a>
                <a className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1708797851367-202c252c31f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="featuredImg"
                    />
                    <div className="featuredText">
                        Article about That<p className="itemDescription">Read more</p>
                    </div>
                </a>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 607,
        windowWidth: 1373,
    },
});
