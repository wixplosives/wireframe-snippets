import { createBoard } from '@wixc3/react-board';
import './hero-center.board.css';

export default createBoard({
    name: 'HeroCenter',
    Board: () => (
        <div className="root">
            <h1 className="title">
                Title Goes Here.
                <br />
                Click to Edit and Add Your Own Text.
            </h1>
            <div className="buttons">
                <button className="secondaryButton">Contact Us</button>
                <button className="primaryButton">Learn More</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowHeight: 709,
        windowWidth: 1056,
    },
});
