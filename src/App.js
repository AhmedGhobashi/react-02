
import './App.css';
import FirstUseEffect from './Components/FirstUseEffect/FirstUseEffect';
import  {useEffect, useState} from 'react'; 
import axios from 'axios';
import DebouncingTechTwo from './Components/DebouncingTechTwo';

function App() {
  const [term, setTerm] = useState ('');
  const [result, setResult] = useState([]);

  useEffect(()=>{
    const search =async ()=>{

      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(respond.data.query.search);
      console.log (respond.data.query.search);
      
    }  //search-by-axios closed


    if (!result.length){
      if (term) {
        search();
      }

    }else{

      
      const debounceSearch = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(debounceSearch);
      };
 

    }




  }, [term, result.length, ]); // useEffect closed



  const fetchingResult  = result.map ((el)=>{
    return (
      <tr key={el.pageid}>
        <th scope="row">1</th>
        <td>{el.title}</td>
        <td> 
          <span dangerouslySetInnerHTML={{'__html': el.snippet}} />
        </td>
      </tr>
    );
     
  });

  return (
    <div className="App">
      <FirstUseEffect />

      <h1>without fixing debounce:</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="my-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Search Input
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange = {(e)=>{
                  setTerm (e.target.value)
                }}
                value = {term}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Desc</th>
                </tr>
              </thead>
              <tbody>
                {fetchingResult}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default App;
