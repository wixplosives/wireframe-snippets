import './hero-flex-2.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => (
        <div className="card">
            <div className="imgBox">
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_860,h_800/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt="Delicious Margherita Pizza"
                    className="img"
                />
            </div>
            <div className="contentBox">
                <h1 className="title">Authentic Margherita Delight</h1>
                <p className="description">
                    Savor the taste of Italy with our classic Margherita pizza. Made with fresh
                    mozzarella, ripe tomatoes, and fragrant basil on a perfectly crisp crust,
                    it&apos;s a timeless favorite that captures the essence of traditional
                    Neapolitan pizza-making.
                </p>
                <button className="addToCartButton">Add to Cart</button>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1055,
        windowHeight: 1014,
    },
});
