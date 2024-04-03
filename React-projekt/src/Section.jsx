import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPlus } from '@fortawesome/free-solid-svg-icons'


function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}/${date}/${month}`;
  }
export default function Section(){
return(
    <>
        <section className="section">
            <div className="todo">
                <h3>Todo</h3>
                    <ul>
                        <li>hej</li>
                        <p>{getDate()}</p>
                    </ul>
                    <p className='icon'>
                    <FontAwesomeIcon icon={faPlus} />
                    </p>
            </div>
            <div className="doing">
                <h3>Doing</h3>
                <ul>
                    <li> hejjj</li>
                    <p>{getDate()}</p>   
                </ul>
            </div>
            <div className="done">
                <h3>Done</h3>
                <ul>
                    <li>klar</li>
                    <p>{getDate()}</p>
                </ul>
            </div>
        </section>
    </>
)
}
function läggTillAnteckning() {
    const editorInnehåll = document.getElementsByClassName("todo").innerHTML.trim();
    if (editorInnehåll !== "") {
        sparaAnteckning(editorInnehåll);
        document.getElementsByClassName("todo").innerHTML = "";
    }
}

