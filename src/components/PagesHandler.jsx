export const PagesHandler = ({ onNewPage, initialPage = 1}) => {
    
    const incrementPage = () => {
        if(initialPage === 20) return;

        onNewPage(initialPage + 1);
    }

    const decrementPage = () => {
        if(initialPage === 1) return;

        onNewPage(initialPage - 1);
    }

    return (
        <>
            <button onClick={ decrementPage }>prev</button>
            <p>page { initialPage }</p>
            <button onClick={ incrementPage }>next</button>
        </>
    );
}
