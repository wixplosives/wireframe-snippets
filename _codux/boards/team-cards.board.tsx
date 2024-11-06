import './team-cards.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Team Cards',
    Board: () => (
        <div className="teamCards">
            <div className="teamCardsCard">
                <h1 className="teamCardsCardTitle">Team Card One</h1>
                <p className="teamCardsCardSubtitle">
                    Add paragraph text. Click “Edit Text” to update the font, size and more. To
                    change and reuse text themes, go to Site Styles.
                </p>
            </div>
            <div className="teamCardsCard">
                <h1 className="teamCardsCardTitle">Team Card Two</h1>
                <p className="teamCardsCardSubtitle">
                    Add paragraph text. Click “Edit Text” to update the font, size and more. To
                    change and reuse text themes, go to Site Styles.
                </p>
            </div>
            <div className="teamCardsCard">
                <h1 className="teamCardsCardTitle">Team Card Three</h1>
                <p className="teamCardsCardSubtitle">
                    Add paragraph text. Click “Edit Text” to update the font, size and more. To
                    change and reuse text themes, go to Site Styles.
                </p>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1045,
        windowHeight: 1080,
    },
});
