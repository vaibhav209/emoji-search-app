import { useEffect, useState } from 'react';
import styles from './ToSearch.module.css';
import data from './../../JSON/data.json';
import Header from '../Header/Header';


const ToSearch = () => {

    const [emojiData, setEmojiData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {

        const emojiFiltered = data.filter((emojiData) => emojiData.title.toLowerCase().includes(searchText.toLowerCase()));
        setEmojiData(emojiFiltered);

    }, [searchText])

    const searchHandler = (e) => {
        setSearchText(e.target.value);
    }


    return (
        <div>
            <Header />
            <input className={styles.searchBar} type="text" placeholder="Type Keyword to Search" onChange={searchHandler} />

            <div className={styles.resultShown}>

                {emojiData.length ? emojiData.map((emojiData, index) => (

                    <div className={styles.itemShown} key={index}>

                        <span className={styles.itemEmoji}>{emojiData.symbol}</span>
                        <p> {emojiData.title} </p>
                    </div>
                )) : (<h3 style={{ color: 'red', letterSpacing: '0.5px', fontSize: '24px' }}>No Emoji Found</h3>)}
            </div>
        </div>
    )
};

export default ToSearch;