import '../styles/pagesHandler.css';

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
        <div className="pages-handler-container">
            <button onClick={ decrementPage } className='btn'>prev</button>
            <button className='btn'> { initialPage }</button>
            <button onClick={ incrementPage } className='btn'>next</button>
        </div>
    );
}
