import './hero-title.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Title',
    Board: () => (
        <div className="heroTitle">
            <h1 className="heroTitleHeading">
                Title Goes Here. Click to Edit and Add Your Own Text.
            </h1>
            <div className="heroTitleButtons">
                <a href="#" className="heroTitleSecondaryButton">
                    Contact Us
                </a>
                <a href="#" className="heroTitlePrimaryButton">
                    Learn More
                </a>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1904,
        windowHeight: 1232,
    },
});
