import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house , ring}) => {
    return (
        <div>
           <h4>Myself</h4> 
           <p><small>House: {house}</small></p>
           <section>
                <Special ring={ring}></Special>
           </section>
        </div>
    );
};

export default MySelf;