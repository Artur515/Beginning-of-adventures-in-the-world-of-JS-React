import {Dimmer} from "semantic-ui-react";


const Loader = () => {
    return (
        <Dimmer active>
            <Loader size='massive'>Loading</Loader>
        </Dimmer>
    )
}

export default Loader