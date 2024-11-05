import './hero-title.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Title',
    Board: () => (
        <div className="heroTitle">
            <h1 className="heroTitleTitle">Title Goes Here. Click to Edit and Add Your Own Text.</h1>
            <div className="heroTitleButtonsContainer">
                <a href="#a" className="heroTitleSecondaryButton">
                    Contact Us
                </a>
                <a href="#a" className="heroTitlePrimaryButton">
                    Learn More
                </a>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1479,
        windowHeight: 683,
    },
});
