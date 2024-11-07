import './card-collection.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Card Collection',
    Board: () => (
        <div className="cardCollection">
            <h1 className="cardCollectionHeader">
                Write a Title Here.
                <br /> Click to Edit and Add Your Own Text.
            </h1>
            <div className="cardCollectionItems">
                <div className="cardCollectionItem">
                    <img
                        src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                        alt=""
                        className="cardCollectionImage"
                    />
                    <div className="cardCollectionContent">
                        <h2 className="cardCollectionTitle">Item Title</h2>
                        <p className="cardCollectionDescription">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="cardCollectionButton">Explore</button>
                    </div>
                </div>
                <div className="cardCollectionItem">
                    <img
                        src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                        alt=""
                        className="cardCollectionImage"
                    />
                    <div className="cardCollectionContent">
                        <h2 className="cardCollectionTitle">Item Title</h2>
                        <p className="cardCollectionDescription">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="cardCollectionButton">Explore</button>
                    </div>
                </div>
                <div className="cardCollectionItem">
                    <img
                        src="https://static.wixstatic.com/media/8586f3_f6d2538ac6374f71b6dc29511c5cd1a3~mv2.png/v1/fill/w_860,h_600/Frame%206.png"
                        alt=""
                        className="cardCollectionImage"
                    />
                    <div className="cardCollectionContent">
                        <h2 className="cardCollectionTitle">Item Title</h2>
                        <p className="cardCollectionDescription">
                            Use this space to promote the business, its products or its services.
                        </p>
                        <button className="cardCollectionButton">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
