import { createBoard } from '@wixc3/react-board';
import './hero-center.board.css';

export default createBoard({
    name: 'HeroCenter',
    Board: () => (
        <div className="hero">
            <h1 className="heroTitle">
                Title Goes Here.
                <br />
                Click to Edit and Add Your Own Text.
            </h1>
            <div className="heroButtons">
                <a href="#a" className="heroSecondaryButton">
                    Contact Us
                </a>
                <a href="#a" className="heroPrimaryButton">
                    Learn More
                </a>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 400,
        windowWidth: 511,
    },
});
