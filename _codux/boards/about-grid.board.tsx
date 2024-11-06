import './about-grid.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'About Grid',
    Board: () => (
        <div className="about-grid">
            <div className="about-grid-image-cell">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                    alt=""
                    className="about-grid-image"
                />
            </div>
            <div className="about-grid-title-cell">
                <h1 className="about-grid-title">Write a Title Here</h1>
            </div>
            <div className="about-grid-subtitle-cell">
                <h5 className="about-grid-subtitle">Subtitle Goes Here</h5>
            </div>
            <div className="about-grid-content-cell">
                <p className="about-grid-content">
                    This is a paragraph where you can include any information you’d like. It’s an
                    opportunity to tell a story about the company, describe a special service it
                    offers, or highlight a particular feature that sets it apart from competitors.
                    Make sure it fits the general tone and voice of the brand, then adjust the font,
                    size or scale to customize the style.
                </p>
            </div>
            <div className="about-grid-button-cell">
                <button className="about-grid-button">Button</button>
            </div>
            <div className="about-grid-second-image-cell">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                    alt=""
                    className="about-grid-image"
                />
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1007,
        windowHeight: 747,
    },
});
