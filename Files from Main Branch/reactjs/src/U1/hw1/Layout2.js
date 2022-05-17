import './layout.css';

function ScreenLayout() {
    return (
        <div id="container">
            <header id="status-bar">Status Bar</header>
            <main>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </main>
            <footer id="docker">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </footer>
        </div>
    );
}

export default ScreenLayout;
