import './about-grid.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'About Grid',
    Board: () => (
        <div>
            <div className="AboutGridBoard_div1">
                <div className="imageCell">
                    <img
                        src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                        alt=""
                        className="image"
                    />
                </div>
                <div className="cell twocell spacing">
                    <h1 className="AboutGridBoard_header1">Write a Title Here</h1>
                </div>
                <div className="cell spacing">
                    <h5 className="AboutGridBoard_header2">Subtitle Goes Here</h5>
                </div>
                <div className="cell spacing">
                    <p className="AboutGridBoard_p1">
                        This is a paragraph where you can include any information you’d like. It’s
                        an opportunity to tell a story about the company, describe a special service
                        it offers, or highlight a particular feature that sets it apart from
                        competitors. Make sure it fits the general tone and voice of the brand, then
                        adjust the font, size or scale to customize the style.
                    </p>
                </div>
                <div className="cell spacing">
                    <button className="AboutGridBoard_button1">Button</button>
                </div>
                <div className="cell threeCell">
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
        windowWidth: 890,
        windowHeight: 694,
    },
});
