import './team-cards-1.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Team Cards 1',
    Board: () => (
        <div className="root">
            <h1 className="title">
                Write a Title Here.
                <br /> Click to Edit and Add Your Own Text.
            </h1>
            <div className="teams">
                <div className="teamCard">
                    <div className="imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="img"
                        />
                    </div>
                    <div className="contentBox">
                        <h2 className="teamTitle ">Item Title</h2>
                        <p className="description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="exploreButton">Explore</button>
                    </div>
                </div>
                <div className="teamCard">
                    <div className="imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="img"
                        />
                    </div>
                    <div className="contentBox">
                        <h2 className="teamTitle ">Item Title</h2>
                        <p className="description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="exploreButton">Explore</button>
                    </div>
                </div>
                <div className="teamCard">
                    <div className="imgBox">
                        <img
                            src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                            alt="Delicious Margherita Pizza"
                            className="img"
                        />
                    </div>
                    <div className="contentBox">
                        <h2 className="teamTitle ">Item Title</h2>
                        <p className="description">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="exploreButton">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 2759,
        windowHeight: 1080,
    },
});
