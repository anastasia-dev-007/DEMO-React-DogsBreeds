function Footer({ breeds, handleFirstClick, handlePrevClick, handleNextClick, handleLastClick }) {
    return (
        <footer>
            <button disabled={breeds.links?.current === undefined} onClick={() => handleFirstClick()}>First</button>
            <button disabled={breeds.links?.prev === undefined} onClick={() => handlePrevClick()}>Previous</button>
            <button disabled={breeds.links?.next === undefined} onClick={() => handleNextClick()}>Next</button>
            <button disabled={breeds.links?.last === undefined} onClick={() => handleLastClick()}>Last</button>
        </footer>
    );
}

export default Footer;