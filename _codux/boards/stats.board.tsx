import './stats.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Stats',
    Board: () => (
        <div className="stats">
            <h2 className="statsHeader">Our Story in Numbers</h2>
            <div className="statsAllStatsContainer">
                <section>
                    <h4 className="statsNumber">30K</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </section>
                <section>
                    <h4 className="statsNumber">+27%</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </section>
                <section>
                    <h4 className="statsNumber">15M</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </section>
                <section>
                    <h4 className="statsNumber">890</h4>
                    <h4 className="statsTitle">Item Title</h4>
                    <p className="statsDescription">Use this space to explain the above number.</p>
                </section>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1096,
        windowHeight: 768,
    },
});
