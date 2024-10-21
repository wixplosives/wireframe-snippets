import './team-cards-2.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Team Cards 2',
    Board: () => (
        <div className="root">
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="card-image"
                />
                <div className="content">
                    <h1 className="card-title">Featured Item Two</h1>
                    <p className="subtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="card-image"
                />
                <div className="content">
                    <h1 className="card-title">Featured Item Two</h1>
                    <p className="subtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
            <div className="card">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="card-image"
                />
                <div className="content">
                    <h1 className="card-title">Featured Item Two</h1>
                    <p className="subtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 480,
        windowHeight: 1080,
    },
});