import './hero-title.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Hero Title',
    Board: () => (
        <div className="hero-title">
            <h1 className="title">Title Goes Here. Click to Edit and Add Your Own Text.</h1>
            <div className="hero-buttons">
                <a href="#a" className="hero-secondary-button">
                    Contact Us
                </a>
                <a href="#a" className="hero-primary-button">
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
