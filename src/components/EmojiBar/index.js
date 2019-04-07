import React, { Component } from 'react';
import styles from './EmojiBar.css';
import {connect} from 'react-redux';

const emojis = [
  {
    name: styles.hlop
  },
  {
    name: styles.kach
  },
  {
    name: styles.kaif
  },
  {
    name: styles.krest
  },
  {
    name: styles.petuhi
  },
  {
    name: styles.ugar
  },
];

class EmojiBar extends Component {

  render(){
    const emojiBar = emojis.map((emoji, i) =>
      <span key={i} className={emoji.name} onClick={this.props.onInput} id={i}/>
    )
    console.log(emojiBar)
    return (
      <label className={styles.emojiButton}>
        <div className={styles.keyboard}>
          {emojiBar}
        </div>
      </label>
    )
  }
}

const options = {
    hour: 'numeric',
    minute: 'numeric'
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (event) => {
      event.preventDefault();
      var f = [];
      f.push(<label className={event.target.className}/>)
      dispatch({
        type: 'SEND_EMOJI',
        payload: {
          id: new Date(),
          author: 'Me',
          text: '',
          content: f,
          time: (new Date()).toLocaleString('ru', options)
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(EmojiBar)
