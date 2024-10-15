import './hero-image.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Image',
    Board: () => (
        <div className="root">
            <div className="imgBox">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_800/Frame%206.png"
                    alt="Delicious Margherita Pizza"
                    className="img"
                />
            </div>
            <div className="contentBox">
                <h1 className="title">Write a Title Here</h1>
                <p className="description">
                    This is a space to welcome visitors to the site. Grab their attention with copy
                    that clearly states what the site is about, and add an engaging image or video.
                </p>
                <button className="exploreButton">Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 746,
    },
});
