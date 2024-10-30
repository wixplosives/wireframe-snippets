import './about-grid.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'About Grid',
    Board: () => (
        <div>
            <div className="root">
                <div className="imageCell">
                    <img
                        src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                        alt=""
                        className="image"
                    />
                </div>
                <div className="titleCell">
                    <h1 className="title">Write a Title Here</h1>
                </div>
                <div className="subtitleCell">
                    <h5 className="subtitle">Subtitle Goes Here</h5>
                </div>
                <div className="contentCell">
                    <p className="content">
                        This is a paragraph where you can include any information you’d like. It’s
                        an opportunity to tell a story about the company, describe a special service
                        it offers, or highlight a particular feature that sets it apart from
                        competitors. Make sure it fits the general tone and voice of the brand, then
                        adjust the font, size or scale to customize the style.
                    </p>
                </div>
                <div className="buttonCell">
                    <button className="button">Button</button>
                </div>
                <div className="imge2">
                    <img
                        src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_960,h_689,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Frame%206.png"
                        alt=""
                        className="image"
                    />
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 479,
        windowHeight: 747,
    },
});
