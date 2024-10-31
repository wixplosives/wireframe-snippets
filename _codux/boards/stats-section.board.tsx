import './stats-section.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'StatsSection',
    Board: () => (
        <div className="statsSection">
            <h2 className="statsTitle">Our Story in Numbers</h2>
            <div className="allStatsContainer">
                <div className="statsContainer">
                    <h4 className="statNumber">30K</h4>
                    <h4 className="statTitle">Item Title</h4>
                    <p className="statDescription">Use this space to explain the above number.</p>
                </div>
                <div className="statsContainer">
                    <h4 className="statNumber">+27%</h4>
                    <h4 className="statTitle">Item Title</h4>
                    <p className="statDescription">Use this space to explain the above number.</p>
                </div>
                <div className="statsContainer">
                    <h4 className="statNumber">15M</h4>
                    <h4 className="statTitle">Item Title</h4>
                    <p className="statDescription">Use this space to explain the above number.</p>
                </div>
                <div className="statsContainer">
                    <h4 className="statNumber">890</h4>
                    <h4 className="statTitle">Item Title</h4>
                    <p className="statDescription">Use this space to explain the above number.</p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1289,
        windowHeight: 677,
    },
});