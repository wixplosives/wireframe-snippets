import './hero-title.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Title',
    Board: () => (
        <div className="root">
            <h1 className="heroTitle">Title Goes Here. Click to Edit and Add Your Own Text.</h1>
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
        windowWidth: 1069,
    },
});
