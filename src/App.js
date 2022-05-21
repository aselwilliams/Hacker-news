import axios from "axios";
import "./App.css";
import Modal from './components/Modal'
import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import LoadingIcon from "./components/LoadingIcon";
import NewsFeed from "./components/NewsFeed";
const api = "https://hn.algolia.com/api/v1/search?query=";
const userUrl='https://hn.algolia.com/api/v1/users/'

function App() {
 const [news, setNews]= useState([]);
 const [isLoading, setIsLoading] =useState(false);
 const [searchValue, setSearchValue] = useState('');
 const [url, setUrl] = useState(api);
 const [modal, setModal] =useState(false);
 const [userInfo, setUserInfo] = useState({});
 const [newUrl, setNewUrl]=useState(userUrl)
  
  const getData = () => {
    axios
      .get(url)
      .then((data) => setNews(data.data.hits));
  };

  useEffect(()=>{
     setIsLoading(true);
    getData();
    setIsLoading(false);
  },[])

  useEffect(()=>{
      getData();
  },[url])

  const handleDelete = (id) => {
    const updatedList = news.filter((item) => item.objectID !== id);
    setNews(updatedList);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setUrl(`${api}${searchValue}`)
    };
  
    const showUserInfo=(username)=>{
      console.log(username)
      axios
      .get(`${userUrl}${username}`)
      .then((data) =>
      setUserInfo(data.data));
      setModal(true)
      console.log(userInfo)
    }

    const closeModal=()=>{
      setModal(false)
    }
    return (
      <>
        <div className="container">
          <header>
            <h1>Hacker News</h1>
          </header>
          <Form
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
          {modal ? <Modal userInfo={userInfo} closeModal={closeModal} />
          : <>
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <NewsFeed news={news} handleDelete={handleDelete} showUserInfo={showUserInfo} />
          )}
 </> }
        </div>
      </>
    );
  
}

export default App;
