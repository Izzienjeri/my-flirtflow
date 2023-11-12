// Import necessary FontAwesome icons in UserData component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faTrashCan,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// ...

function AutoType({ word, delay, infinite }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wordLength = word.length;

    const typeText = () => {
      setText((prevText) => prevText + word[index]);
      setIndex((prevIndex) => (prevIndex + 1) % wordLength);
    };

    const timeout = setTimeout(typeText, delay);

    return () => clearTimeout(timeout);
  }, [index, delay, word, infinite]);

  return <span>{text}</span>;
}

export default AutoType;
