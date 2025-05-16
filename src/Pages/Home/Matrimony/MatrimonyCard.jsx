import { useEffect, useState } from "react";
import Matrimony from "./Matrimony";

const MatrimonyCard = () => {
    const [MatrimonyCard, setMatrimonyCard] = useState([]);

    useEffect(() => {
        fetch('Matrimony.json')
            .then((res) => res.json())
            .then((data) => setMatrimonyCard(data))

    }, [])


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10">
            {
                MatrimonyCard.map(matrimony => <Matrimony
                    key={matrimony.id}
                    matrimony={matrimony}
                >
                </Matrimony>)
            }
        </div>
    );
};

export default MatrimonyCard;