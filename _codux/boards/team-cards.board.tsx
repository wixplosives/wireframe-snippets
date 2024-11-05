import './team-cards.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'teamCards',
    Board: () => (
        <div className="teamCards">
            <div className="teamCardsCard">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="teamCardsCardImage"
                />
                <div className="teamCardsCardContent">
                    <h1 className="teamCardsCardTitle">Featured Item Two</h1>
                    <p className="teamCardsCardSubtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
            <div className="teamCardsCard">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="teamCardsCardImage"
                />
                <div className="teamCardsCardContent">
                    <h1 className="teamCardsCardTitle">Featured Item Two</h1>
                    <p className="teamCardsCardSubtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
            <div className="teamCardsCard">
                <img
                    src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                    alt=""
                    className="teamCardsCardImage"
                />
                <div className="teamCardsCardContent">
                    <h1 className="teamCardsCardTitle">Featured Item Two</h1>
                    <p className="teamCardsCardSubtitle">
                        Add paragraph text. Click “Edit Text” to update the font, size and more. To
                        change and reuse text themes, go to Site Styles.
                    </p>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1082,
        windowHeight: 768,
    },
});
