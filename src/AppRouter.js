import {Routes, Route } from 'react-router-dom';
import Home from './pages/home_page/Home';
import Contact from './pages/contact_page/Contact';
import LearnWithMe from './pages/learn_page/LearnWithMe';
import MyProject from './pages/my_project_page/MyProject';
import MyWork from './pages/my_work_page/MyWork';

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learnwithme" element={<LearnWithMe />} />
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/mywork" element={<MyWork />} />
        </Routes>

    )
}
export default AppRouter;