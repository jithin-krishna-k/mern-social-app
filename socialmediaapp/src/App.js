import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import EditPost from './EditPost';


function App() {


  return (
    <div className="App">
      <DataProvider>
      <Header title="React JS Blog"  />
      <Nav/>
      <Routes>
        <Route path="/" element =
         { <Home />} /> 
        <Route path="post"><Route index element={
          <NewPost/>} />    
        <Route path=":id" element={
          <PostPage/>} />
        </Route>
         <Route path='/edit/:id' element={<EditPost/>}/>                                           
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;