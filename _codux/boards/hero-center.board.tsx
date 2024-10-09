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
                <button className="heroButton">Contact Us</button>
                <button className="heroButton">Learn More</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 768,
        windowWidth: 615,
    },
});
