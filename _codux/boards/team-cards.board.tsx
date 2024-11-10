import './team-cards.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Team Cards',
    Board: () => (
            <div className="teamCards">
                <div className="teamCardsCard">
                    <h1 className="teamCardsCardTitle">Team Card One</h1>
                    <p className="teamCardsCardSubtitle">
                        Double click the the text to edit its content, to edit font size, font
                        colors, and all css properties in the style panel.
                    </p>
                </div>
                <div className="teamCardsCard">
                    <h1 className="teamCardsCardTitle">Team Card Two</h1>
                    <p className="teamCardsCardSubtitle">
                        Double click the the text to edit its content, to edit font size, font
                        colors, and all css properties in the style panel.
                    </p>
                </div>
                <div className="teamCardsCard">
                    <h1 className="teamCardsCardTitle">Team Card Three</h1>
                    <p className="teamCardsCardSubtitle">
                        Double click the the text to edit its content, to edit font size, font
                        colors, and all css properties in the style panel.
                    </p>
                </div>
            </div>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
