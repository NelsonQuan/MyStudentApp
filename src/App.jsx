import { v4 } from "uuid";
import Topbar from "./components/Topbar";
import BodyContent from "./components/BodyContent";
import { useState } from "react";
import students from "./data/studentsData";
import StudentsList from "./components/StudentsList";
import StudentsSummary from "./components/StudentsSummary";
import About from "./components/pages/About";
import StudentForm from "./components/StudentForm";
import Product from "./components/pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/pages/Post";
import NotFound from "./components/pages/NotFound";
import { StudentProvider } from "./context/StudentContext";

function App() {
    const [stud, setStud] = useState(students);
    
    const studentDeleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            setStud(stud.filter((item) => {
                return item.id !== id
            }))
        }
    }

    const StudentAdd = (student) => {
        student.id = v4();
        setStud([student, ...stud]);
    };

    return (
        <StudentProvider>
        <BrowserRouter>
            <Topbar title={"Title from App"}
                content="This is content" />
            <Routes>
                <Route path="/" element={
                    <>
                        <StudentForm />
                        <StudentsSummary />
                        <StudentsList/>
                        <BodyContent first_name="David" last_name="Owolabi" str_num={20} age={12} />
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/post" element={<Post />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </StudentProvider>
    );
}

export default App;