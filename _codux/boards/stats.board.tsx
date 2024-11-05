import './stats.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Stats',
    Board: () => (
        <div className="stats">
            <h2 className="statsHeader">Our Story in Numbers</h2>
            <div className="statsAllStatsContainer">
                <div>
                    <h4 className="statsNumber">30K</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </div>
                <div>
                    <h4 className="statsNumber">+27%</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </div>
                <div>
                    <h4 className="statsNumber">15M</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </div>
                <div>
                    <h4 className="statsNumber">890</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
