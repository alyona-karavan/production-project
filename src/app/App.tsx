import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgest/Navbar';
import { Sidebar } from 'widgest/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
