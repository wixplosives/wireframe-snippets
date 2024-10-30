import './clients-section.board.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'ClientsSection',
    Board: () => (
        <div className="clientsSection">
            <div className="clientsContent">
                <div className="clientsContentTexts">
                    <h2 className="clientsTitle">Our Clients</h2>
                    <p className="clientsDescription">
                        Showcase current and previous clients and their success stories. Use this
                        space to share information about your partnership and add examples of shared
                        projects and how they made an impact.
                    </p>
                </div>
                <img
                    src="https://static.wixstatic.com/media/baac51_85ea66dc04284f40910abb8e1b90a2ba~mv2.jpg/v1/fill/w_1680,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/baac51_85ea66dc04284f40910abb8e1b90a2ba~mv2.jpg"
                    alt=""
                    className="clientsSectionImage"
                />
            </div>
            <div className="clientsLogosGrid">
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_5c720747d7354dba80018d7d997449dc.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_2166ae7dd24f43b5b5d81b82723fb514.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_8578952f0104450ab6439b62e80a4e94.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_b38de69a8fef47a4a7b4352eb614e56c.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_6f586dc3ae5c401f94331b8f43d80207.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
                <div className="clientLogoContainer">
                    <img
                        src="https://static.wixstatic.com/shapes/27eba2_933967ebc7324eb1937d9d86b71dc875.svg"
                        alt=""
                        className="clientLogo"
                    />
                </div>
            </div>
        </div>
    ),
    environmentProps: {
        windowWidth: 767,
        windowHeight: 892,
    },
});
