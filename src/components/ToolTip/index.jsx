import { useState } from 'react';

const LANGUAGE_TOOL_TIP = ({ items }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <>
            { items.map(({ icon, name, description }) => (
                <div>
                    <button onClick={ setShowDescription(state => !state) }>{ icon }</button>

                    { showDescription &&
                        <div>
                            <h5>{ name }</h5>
                            <p>{ description }</p>
                        </div>
                    }
                </div>
            )) }
        </> 
    )
}

export default LANGUAGE_TOOL_TIP