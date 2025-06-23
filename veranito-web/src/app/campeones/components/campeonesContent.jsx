import { List } from "./list";
import { Count } from "./count";

export const CampeonesContent = ({ campeones }) => {
    return (
        <div>
            <List campeones={campeones} />
            <Count count={campeones.length} />
        </div>
    );
};      