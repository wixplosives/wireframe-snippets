import { createBoard } from '@wixc3/react-board';
import './hero-flex.board.css';

export default createBoard({
    name: 'HeroFlex',
    Board: () => (
        <div className="hero">
            <img
                className="heroImage"
                src="https://static.wixstatic.com/media/8586f3_c98b193548784753bb357eeb03615da5~mv2.jpg/v1/fill/w_1728,h_1378/Image%20by%20Johannes%20Plenio.jpg"
                alt=""
            />
            <div className="heroContent">
                <h1 className="heroTitle">Write a Title Here</h1>
                <p className="heroText">
                    This is a space to welcome visitors to the site. Grab their attention with copy
                    that clearly states what the site is about, and add an engaging image or video.
                </p>
                <button className="heroButton">Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 430,
    },
});
