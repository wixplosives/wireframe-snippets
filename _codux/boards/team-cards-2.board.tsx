import './team-cards-2.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Team Cards 2',
    Board: () => (
        <div className="root">
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className="card-image"
                />
                <h1 className="card-title">Heading 1</h1>
            </div>
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className="card-image"
                />
                <h1 className="card-title">Heading 1</h1>
            </div>
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                    className="card-image"
                />
                <h1 className="card-title">Heading 1</h1>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1390,
    },
});
