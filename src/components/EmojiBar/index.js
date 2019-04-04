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
      event.preventDefault()
      console.log(event.target.id);
      var element = document.getElementById(event.target.id),
          style = window.getComputedStyle(element),
          background = style.getPropertyValue('background');
      var parts = background.split('url(');
      parts = parts[1].split(')');
      var url = parts[0];
      console.log('ururur', url)
      var f = [];

      f.push(<img alt={new Date()}/>)
      dispatch({
        type: 'SEND_EMOJI',
        payload: {
          class: event.target.className,
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
