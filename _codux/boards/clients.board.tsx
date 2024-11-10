import './clients.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Clients',
    Board: () => (
        <div className="clients">
            <header className="clientsHeader">
                <div className="clientsContentTexts">
                    <h2 className="clientsTitle">Our Clients</h2>
                    <p className="clientsDescription">
                        Showcase current and previous clients and their success stories. Use this
                        space to share information about your partnership and add examples of shared
                        projects and how they made an impact.
                    </p>
                </div>
                <img
                    src="https://static.wixstatic.com/media/8586f3_c98b193548784753bb357eeb03615da5~mv2.jpg/v1/fill/w_1680,h_954/Image%20by%20Johannes%20Plenio.jpg"
                    alt=""
                    className="clientsImage"
                />
            </header>
            <div className="clientsLogos">
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_5c720747d7354dba80018d7d997449dc.svg"
                    alt=""
                    className="clientsLogoImage"
                />
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_2166ae7dd24f43b5b5d81b82723fb514.svg"
                    alt=""
                    className="clientsLogoImage"
                />
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_8578952f0104450ab6439b62e80a4e94.svg"
                    alt=""
                    className="clientsLogoImage"
                />
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_b38de69a8fef47a4a7b4352eb614e56c.svg"
                    alt=""
                    className="clientsLogoImage"
                />
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_6f586dc3ae5c401f94331b8f43d80207.svg"
                    alt=""
                    className="clientsLogoImage"
                />
                <img
                    src="https://static.wixstatic.com/shapes/27eba2_933967ebc7324eb1937d9d86b71dc875.svg"
                    alt=""
                    className="clientsLogoImage"
                />
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 1590,
        windowHeight: 768,
    },
});
