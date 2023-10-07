import Typewriter from 'typewriter-effect';

function TypeWriter({ texts }) {
    return (
        <Typewriter
            options={{
                strings: texts,
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
                wrapperClassName: 'head_tags'
            }} />
    );
} 

export default TypeWriter;