import './about.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'About',
    Board: () => (
        <div className="about">
            <img
                src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                alt=""
                className="aboutImage"
            />
            <div className="aboutTitleCell">
                <h1 className="aboutTitle">Write a Title Here</h1>
            </div>
            <div className="aboutSubtitleCell">
                <h5 className="aboutSubtitle">Subtitle Goes Here</h5>
            </div>
            <div className="aboutContentCell">
                <p className="aboutContent">
                    This is a paragraph where you can include any information you’d like. It’s an
                    opportunity to tell a story about the company, describe a special service it
                    offers, or highlight a particular feature that sets it apart from competitors.
                    Make sure it fits the general tone and voice of the brand, then adjust the font,
                    size or scale to customize the style.
                </p>
            </div>
            <div className="aboutButtonCell">
                <button className="aboutButton">Button</button>
            </div>
            <div className="aboutSecondImageCell">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                    alt=""
                    className="aboutImage"
                />
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 425.3333333333333,
        windowHeight: 747,
    },
});
