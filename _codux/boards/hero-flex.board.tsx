import { createBoard } from '@wixc3/react-board';
import './hero-flex.board.css';

export default createBoard({
    name: 'HeroFlex',
    Board: () => (
        <div className="card">
            <img
                src="https://static.wixstatic.com/media/8586f3_c98b193548784753bb357eeb03615da5~mv2.jpg/v1/fill/w_600,h_600/Image%20by%20Johannes%20Plenio.jpg"
                alt=""
                className="card-image"
            />
            <div className="card-content">
                <h2>Write aTitle Here</h2>
                <p>
                    This is a space to welcome visitors to the site. Grab their attention with copy
                    that clearly states what the site is about, and add an engaging image or video
                </p>
                <button className="button">Explore</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1124,
        windowHeight: 1080,
    },
});
