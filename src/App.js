import './App.css';
import { useEffect, useState } from "react";
import images from './assets/images.json';
import AllImagesTab from './components/allImagesTab';
import Tab from './components/Tab';
import BookmarkedImages from './components/BookmarkedImages';

function App() {

  //variable that saves images in bookmark
  const [bookmark, setBookmark] = useState({});

  //variable that save tabs state
  const [actived, setActived] = useState('all');

  useEffect(() =>{
  }, [bookmark]);

  useEffect(() =>{
  }, [actived]);


  //This function mark and unmark image in bookmark and add it to bookmark variable
  function markAndUmark(e){

    const id = e.currentTarget.getAttribute('data-id');

    if(bookmark[id]){
      const { [id]: tmp, ...rest} = bookmark;
      setBookmark(rest);
    }else{
      setBookmark({...bookmark, [id]: images[id]});
    }
  } 
  
  //This function activate one tab and desactivate other
  function changeTabs(e){
    actived === 'all' ? setActived('bookmark') : setActived("all");
  }

  return (
    <div className="app flex column">
      <div className="header flex">
        <Tab actived={actived} changeTabs={changeTabs} />  
      </div>
      <div className="container flex">
        {actived === 'all' ? <AllImagesTab images={images} markAndUmark={markAndUmark} bookmark={bookmark} /> : <BookmarkedImages images={bookmark} />}
        
      </div>
    </div>
  );
}

export default App;
