import './about-grid.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'About Grid',
    Board: () => (
        <div>
            <div className="root">
                <div className="imageCell">
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className="image"
                    />
                </div>
                <div className="titleCell spacing">
                    <h1 className="title">Write a Title Here</h1>
                </div>
                <div className="spacing subtitleCell">
                    <h5 className="subtitle">Subtitle Goes Here</h5>
                </div>
                <div className="cell spacing contentCell">
                    <p className="content">
                        This is a paragraph where you can include any information you’d like. It’s
                        an opportunity to tell a story about the company, describe a special service
                        it offers, or highlight a particular feature that sets it apart from
                        competitors. Make sure it fits the general tone and voice of the brand, then
                        adjust the font, size or scale to customize the style.
                    </p>
                </div>
                <div className="spacing buttonCell">
                    <button className="button">Button</button>
                </div>
                <div className="cell imge2">
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className="image"
                    />
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 582,
        windowHeight: 747,
    },
});
